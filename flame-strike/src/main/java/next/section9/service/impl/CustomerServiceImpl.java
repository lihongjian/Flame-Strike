package next.section9.service.impl;

import next.section9.common.context.PaginationUtil;
import next.section9.dao.ICustomerDao;
import next.section9.entity.CustomerEntity;
import next.section9.service.CustomerService;
import next.section9.util.entity.PageList;
import next.section9.util.vo.PageParam;
import next.section9.util.vo.PageResult;
import next.section9.util.vo.queryParam.CustomerQuery;
import next.section9.vo.CustomerVO;
import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.lang.reflect.InvocationTargetException;
import java.util.List;


@Service
public class CustomerServiceImpl implements CustomerService {

    @Resource
    ICustomerDao iCustomerDao;

    @Override
    public PageResult getCustomers(CustomerQuery customerQuery) {

        PageParam pageParam = customerQuery.getPageParam();
        List rows = iCustomerDao.pageListCustomers(pageParam, customerQuery);
        PageList pageList = PaginationUtil.getPageList(rows);
        return PaginationUtil.toPageResult(pageList);
    }


    @Override
    public void save(CustomerVO customerVO) {
        CustomerEntity customerEntity = new CustomerEntity();
        try {
            BeanUtils.copyProperties(customerEntity, customerVO);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        if (StringUtils.isBlank(customerEntity.getPk())) {
            iCustomerDao.save(customerEntity);
        } else {
            iCustomerDao.update(customerEntity);
        }
    }

    @Override
    public void delete(String custId) {
        iCustomerDao.delete(custId);
    }
}
