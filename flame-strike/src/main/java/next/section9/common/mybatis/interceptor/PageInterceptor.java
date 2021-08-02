package next.section9.common.mybatis.interceptor;

import next.section9.common.context.PaginationUtil;
import next.section9.util.vo.PageParam;
import org.apache.ibatis.binding.MapperMethod;
import org.apache.ibatis.executor.parameter.ParameterHandler;
import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.mapping.BoundSql;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.reflection.MetaObject;
import org.apache.ibatis.reflection.SystemMetaObject;
import org.apache.ibatis.scripting.defaults.DefaultParameterHandler;
import org.apache.ibatis.session.Configuration;

import java.lang.reflect.Field;
import java.sql.*;
import java.util.Map;
import java.util.Properties;

@Intercepts({ @Signature(type = StatementHandler.class, method = "prepare", args = { Connection.class, Integer.class })})
public class PageInterceptor implements Interceptor {


    public Object intercept(Invocation invocation) throws Throwable {
        Object target = invocation.getTarget();
        if (target instanceof StatementHandler) {
            MetaObject metaObject = SystemMetaObject.forObject(target);
            MappedStatement mappedStatement = (MappedStatement) metaObject.getValue("delegate.mappedStatement");
            BoundSql boundSql = (BoundSql) metaObject.getValue("delegate.boundSql");
            String selectId = mappedStatement.getId();
            String[] methodIds = selectId.split("\\.");
            // 是否是分页查询
            if (!methodIds[methodIds.length-1].startsWith("pageList")) {
                return invocation.proceed();
            }
            int total = getTotal(invocation,mappedStatement,boundSql);
            Map paramMap = (MapperMethod.ParamMap)boundSql.getParameterObject();
            PageParam pageParam = (PageParam) paramMap.get("param1");
            pageParam.setTotal(total);
            PaginationUtil.pageInfo_local.set(pageParam);
            StringBuilder pageBuf = new StringBuilder(boundSql.getSql()).append(" limit ").append(pageParam.getPageSize()).append(" offset ").append(pageParam.getPageSize() * (pageParam.getCurrent() -1));
            String pageSql = pageBuf.toString();
            Field field = boundSql.getClass().getDeclaredField("sql");
            field.setAccessible(true);
            field.set(boundSql, pageSql);
            return invocation.proceed();
        }
        return invocation.proceed();
    }

    private int getTotal(Invocation invocation, MappedStatement mappedStatement, BoundSql boundSql) throws SQLException, SQLException {
        int total = 0;
        Connection conn = (Connection) invocation.getArgs()[0];
        Configuration configuration = mappedStatement.getConfiguration();
        String sql = boundSql.getSql().toLowerCase();
        StringBuilder countBuf = new StringBuilder("select count(*) as total from ");
        if (sql.indexOf(" order ") > sql.lastIndexOf(")")) {
            countBuf.append(sql.substring(sql.indexOf("from") + 4, sql.lastIndexOf("order")));
        } else {
            countBuf.append(sql.substring(sql.indexOf("from") + 4));
        }
        String countSql = countBuf.toString();
        PreparedStatement stmt = null;
        try {
            stmt = conn.prepareStatement(countSql);
            BoundSql countBoundSql = new BoundSql(configuration, countSql, boundSql.getParameterMappings(), boundSql.getParameterObject());
            ParameterHandler handler = new DefaultParameterHandler(mappedStatement, boundSql.getParameterObject(), countBoundSql);
            handler.setParameters(stmt);
            //执行查询
            ResultSet resultSet = stmt.executeQuery();
            while (resultSet.next()) {
                total = resultSet.getInt("total");
            }
            return total;
        } finally {
            if(stmt!=null){
                stmt.close();
            }
        }


    }

    public Object plugin(Object target) {
        return Plugin.wrap(target, this);
    }

    public void setProperties(Properties arg0) {
    }
}