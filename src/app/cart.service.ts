import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class CartService {
  items = []; //定义一个items属性来把当前商品的数组存储在购物车中
  constructor(private http: HttpClient) {}
  // 下面定义把商品添加到购物车、返回购物车商品以及清除购物车商品的方法
  //addToCart() 方法会将产品附加到 items 数组中
  addToCart(product) {
    this.items.push(product);
  }

  //getItems() 方法会收集用户加到购物车中的商品，并返回每个商品及其数量
  getItems() {
    return this.items;
  }

  //clearCart() 方法返回一个空数组
  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
}
