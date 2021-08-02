package next.section9.dao;

import next.section9.entity.UserEntity;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IUserDao {

    UserEntity findUserById(String id);

    List<UserEntity> findUserAll();
}
