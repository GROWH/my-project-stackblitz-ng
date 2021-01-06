import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; //存储表单模型
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: ""
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // 在结帐过程中，用户要提交他们的姓名和地址。在提交订单之后，表单应该重置，购物车应该清空。
  // 在 cart.component.ts 中，定义一个 onSubmit() 方法来处理表单。使用 CartService clearCart() 方法清空购物车项目，并在提交完之后重置该表单。在实际应用中，此方法也会把数据提交给外部服务器。

  onSubmit(customerData) {
    // console.log(customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("your order has been submitted", customerData);
  }
}
