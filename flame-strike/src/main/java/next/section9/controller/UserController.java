package next.section9.controller;

import next.section9.entity.UserEntity;
import next.section9.service.UserService;
import next.section9.util.ResultEnum;
import next.section9.util.ResultUtil;
import next.section9.util.vo.Result;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Resource
    UserService userService;

    @RequestMapping("getUsers")
    public Result<Object> getUsers() {
        List<UserEntity> users = userService.findUserAll();
        return ResultUtil.success(ResultEnum.SUCCESS, users);
    }


    @RequestMapping("getUser")
    public Result<Object> getUser(String userCode) {
        List<UserEntity> users = userService.findUserAll();
        return ResultUtil.success(ResultEnum.SUCCESS, users);
    }


    @RequestMapping("getCurrentUser")
    public Result<Object> getCurrentUser() {
        return ResultUtil.success(ResultEnum.SUCCESS, "hongjian");
    }
}
