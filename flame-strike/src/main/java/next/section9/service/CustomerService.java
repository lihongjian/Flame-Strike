package next.section9.service;

import next.section9.util.vo.PageParam;
import next.section9.util.vo.PageResult;
import next.section9.util.vo.queryParam.CustomerQuery;
import next.section9.vo.CustomerVO;

import java.lang.reflect.InvocationTargetException;

public interface CustomerService {

    PageResult getCustomers(CustomerQuery customerQuery);

    void save(CustomerVO customerVO);

    void delete(String custId);
}
