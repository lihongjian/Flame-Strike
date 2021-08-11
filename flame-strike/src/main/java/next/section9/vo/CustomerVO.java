package next.section9.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CustomerVO {

    String pk;

    String name;

    String phone;

    String sex;

    String age;

    String memo;

    String blacklistedFlag;

}
