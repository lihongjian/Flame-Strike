package next.section9.util.vo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
/**
 *  分页参数信息
 */
public class PageParam {

    public PageParam(){

    }

    public PageParam(int current,int pageSize){
        this.current = current;
        this.pageSize = pageSize;
    }

    int pageSize;

    int current;

    int total;

    int totalPage;

}
