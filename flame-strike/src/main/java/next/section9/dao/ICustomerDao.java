package next.section9.dao;

import next.section9.entity.CustomerEntity;
import next.section9.util.vo.PageParam;
import next.section9.vo.OrderVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ICustomerDao {


    List<CustomerEntity> pageListCustomer(PageParam pageParam, @Param("name") String name);

    int save(CustomerEntity customerEntity);

    int update(CustomerEntity customerEntity);

    void delete(String pk);

}
