import { Component, OnInit } from '@angular/core';
import { CartProductModel } from '../product-model';
import { ManageCartService } from '../manage-cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartProducts: CartProductModel[] = [];
  overalltotal = 0;

  constructor(private manageCart: ManageCartService) { }

  ngOnInit() {
    this.manageCart.getCartProducts()
      .subscribe(
        data => {
          this.cartProducts = data;
        }
      );
  }
  removeProduct(product: CartProductModel) {
    this.manageCart.removeProduct(product);
  }
}