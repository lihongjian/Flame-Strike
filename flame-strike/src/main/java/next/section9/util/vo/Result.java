package next.section9.util.vo;

import lombok.Getter;
import lombok.Setter;

/**
 * http请求返回的最外层对象
 * @param <T>
 */
@Getter
@Setter
public class Result<T> {
    /**
     * 错误码.
     */
    private Integer code;

    /**
     * 提示信息.
     */
    private String msg;

    /**
     * 具体的内容.
     */
    private T data;
}
