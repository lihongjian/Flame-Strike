package next.section9.service.impl;

import next.section9.dao.IUserDao;
import next.section9.entity.UserEntity;
import next.section9.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    IUserDao iUserDao;

    @Override
    public List<UserEntity> findUserAll() {
        return iUserDao.findUserAll();
    }
}
