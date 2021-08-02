package next.section9.util.entity;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class PageList<T> {


    public PageList(List<T> rows){
        this.rows = rows;
    }

    public PageList(){
    }


    int pageSize;

    int pageIndex;

    int total;

    int totalPage;


    List<T> rows;

    public PageList(int pageIndex, int pageSize, int total, List rows) {
        this.pageSize = pageSize;
        this.pageIndex = pageIndex;
        this.total = total;
        this.rows = rows;
    }
}
