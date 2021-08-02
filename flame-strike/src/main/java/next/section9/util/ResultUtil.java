package next.section9.util;

import next.section9.util.vo.Result;

public class ResultUtil {

    public static Result<Object> success(ResultEnum resultEnum, Object object) {
        Result<Object> result = new Result<>();
        result.setCode(resultEnum.getCode());
        result.setMsg(resultEnum.getMsg());
        result.setData(object);
        return result;
    }

    public static Result<Object> error(ResultEnum resultEnum) {
        Result<Object> result = new Result<>();
        result.setCode(resultEnum.getCode());
        result.setMsg(resultEnum.getMsg());
        return result;
    }
}
