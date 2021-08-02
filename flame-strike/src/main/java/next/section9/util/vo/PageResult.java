package next.section9.util.vo;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class PageResult<T> {

    PageInfo pageInfo;

    List<T> rows;

    public PageResult(int pageIndex, int pageSize, int total, List rows) {
        this.pageInfo = new PageInfo(pageIndex,pageSize,total);
        this.rows = rows;
    }
}
