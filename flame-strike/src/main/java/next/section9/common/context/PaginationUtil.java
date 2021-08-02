package next.section9.common.context;

import next.section9.util.entity.PageList;
import next.section9.util.vo.PageParam;
import next.section9.util.vo.PageResult;

import java.util.List;

public class PaginationUtil {

    public  static ThreadLocal<PageParam> pageInfo_local = new ThreadLocal<PageParam>();


    public static PageList getPageList(List rows) {
        PageParam pageParam = pageInfo_local.get();
        pageInfo_local.remove();
        return  new PageList(pageParam.getCurrent(),pageParam.getPageSize(),pageParam.getTotal(),rows);
    }


    public static PageResult toPageResult(PageList pageList){
        return new PageResult(pageList.getPageIndex(),pageList.getPageSize(),pageList.getTotal(),pageList.getRows());
    }

}
