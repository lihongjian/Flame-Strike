package next.section9.vo;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OrderVO  {

    String id;

    String customerName;

    String mobileNum;

    String supplierName;

    String goodsName;

    String unitPrice;

    String totalPrice;

    String orderStatus;

}
