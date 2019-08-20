import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';
import { ManageCartService } from '../manage-cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItemComponent implements OnInit {

  @Input() product: ProductModel;
  constructor(private manageCart: ManageCartService) { }

  ngOnInit() {
  }

  addProductToCart(product: ProductModel) {
    this.manageCart.addProduct(product);
  }
}
