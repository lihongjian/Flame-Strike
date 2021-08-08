package next.section9.dao;

import next.section9.util.vo.PageParam;
import next.section9.vo.OrderVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ICustomerDao {

    List<OrderVO> pageListOrders(PageParam pageParam, @Param("name") String name);

}
