package next.section9.controller;


import next.section9.service.OrderService;
import next.section9.util.ResultEnum;
import next.section9.util.ResultUtil;
import next.section9.util.vo.PageParam;
import next.section9.util.vo.PageResult;
import next.section9.util.vo.Result;
import next.section9.util.vo.queryParam.OrderQuery;
import next.section9.vo.OrderVO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Resource
    OrderService orderService;

    @RequestMapping("getOrders")
    public Result<Object>  getOrders(@RequestBody OrderQuery orderQuery){
        PageResult result = orderService.getOrderList(orderQuery.getPageParam(),orderQuery.getCustomerName());
        return ResultUtil.success(ResultEnum.SUCCESS,result);
    }


}
