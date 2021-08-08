package next.section9.controller;

import next.section9.service.CustomerService;
import next.section9.util.ResultEnum;
import next.section9.util.ResultUtil;
import next.section9.util.vo.PageResult;
import next.section9.util.vo.Result;
import next.section9.util.vo.queryParam.OrderQuery;
import next.section9.vo.CustomerVO;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/cust")
public class CustomerController {

    @Resource
    CustomerService customerService;

    @RequestMapping("getCustomers")
    public Result<Object> getCustomers(@RequestBody OrderQuery orderQuery){
        PageResult result = customerService.getCustomers(orderQuery.getPageParam(),orderQuery.getCustomerName());
        return ResultUtil.success(ResultEnum.SUCCESS,result);
    }

    @RequestMapping("save")
    public Result<Object> save(@RequestBody CustomerVO customerVO){
        PageResult result = customerService.save(customerVO);
        return ResultUtil.success(ResultEnum.SUCCESS,result);
    }

    
}
