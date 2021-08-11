package next.section9.entity;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CustomerEntity {

    String pk;

    String name;

    String phone;

    String sex;

    String age;

    String memo;

    String blacklistedFlag;

}
