import { Component, ViewChild, OnInit } from '@angular/core';
import { ManageCartService } from '../manage-cart.service';

@Component({
  selector: 'app-cart-list-wrapper',
  templateUrl: './cart-list-wrapper.component.html',
  styleUrls: ['./cart-list-wrapper.component.css']
})
export class CartListWrapperComponent implements OnInit {

  overallTotal = 0;
  constructor(private manageCart: ManageCartService) { }
  ngOnInit(): void {
    this.manageCart
      .getCartProducts()
      .subscribe(
        products => {
          this.overallTotal = 0;
          products.forEach(product => {
            this.overallTotal += (product.price * product.quantity)
          });
        }
      );
  }
  emptyCart() {
    this.manageCart.emptyCartList();
  }
}
