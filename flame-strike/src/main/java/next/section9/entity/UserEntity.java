package next.section9.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserEntity {

    String id;

    String name;

    String code;

    String password;

    String created_time;

    String created_by;

    String updated_by;

    String updated_time;

}
