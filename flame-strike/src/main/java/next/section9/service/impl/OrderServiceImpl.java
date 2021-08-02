package next.section9.service.impl;

import next.section9.common.context.PaginationUtil;
import next.section9.dao.IOrderDao;
import next.section9.service.OrderService;
import next.section9.util.entity.PageList;
import next.section9.util.vo.PageParam;

import next.section9.util.vo.PageResult;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Resource
    IOrderDao iOrderDao;

    @Override
    public PageResult getOrderList(PageParam pageParam, String customerName) {
        List rows = iOrderDao.pageListOrders(pageParam,customerName);
        PageList pageList = PaginationUtil.getPageList(rows);
        return PaginationUtil.toPageResult(pageList);
    }
}
