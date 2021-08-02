package next.section9.util.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
/**
 * 返回分页情况
 */
public class PageInfo {

    int pageSize;

    int current;

    int total;

    int totalPage;

    public PageInfo(int current, int pageSize, int total) {
        this.current = current;
        this.pageSize = pageSize;
        this.total = total;
    }

    public PageInfo(){

    }
}
