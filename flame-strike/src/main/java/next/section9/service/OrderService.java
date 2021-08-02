package next.section9.service;

import next.section9.util.vo.PageParam;
import next.section9.util.vo.PageResult;

public interface OrderService {

    PageResult getOrderList(PageParam pageParam, String customerName);
}
