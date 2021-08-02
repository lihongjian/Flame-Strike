package next.section9.service;

import next.section9.entity.UserEntity;

import java.util.List;

public interface UserService {

    List<UserEntity> findUserAll();
}
