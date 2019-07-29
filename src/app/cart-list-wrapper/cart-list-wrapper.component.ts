import { Component, ViewChild } from '@angular/core';
import { CartProductModel } from '../product-model';
import { CartListComponent } from '../cart-list/cart-list.component';

@Component({
  selector: 'app-cart-list-wrapper',
  templateUrl: './cart-list-wrapper.component.html',
  styleUrls: ['./cart-list-wrapper.component.css']
})
export class CartListWrapperComponent{

  @ViewChild(CartListComponent, {static: false})
  private cartList: CartListComponent

  emptyCart(){
    this.cartList.emptyCart();
  }
  
  addProductToCart(product: CartProductModel){
    console.log("addig product to cart (Wrapper)", product);
    this.cartList.addProductToCart(product);
    this.cartList.total();
  }

}
