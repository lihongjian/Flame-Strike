package next.section9.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderEntity {

    String customerName;

    String mobileNum;

    String supplierName;

    String goodsName;

    String unitPrice;

    String totalPrice;

    String orderStatus;
}
