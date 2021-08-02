package next.section9.common.mybatis.config;

import next.section9.util.entity.PageList;
import org.apache.ibatis.reflection.factory.DefaultObjectFactory;

/**
 *
 */
public class MybatisObjectFactory extends DefaultObjectFactory {

    @Override
    public <T> boolean isCollection(Class<T> type) {
        return super.isCollection(type) || type.equals(PageList.class);
    }

}
