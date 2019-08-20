import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GetProductsService } from '../get-products.service';
import { ProductModel, CartProductModel } from '../product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:ProductModel[];
  constructor(private getProducts:GetProductsService) { }
  
 // @Output() addToCartProduct = new EventEmitter<any>();
  
  ngOnInit() {
    this.getProducts.getAllProducts().subscribe(
      data=>{
        this.productList = data.products;
      }
    );
  }
  /*
  getProductFromItemList(product:CartProductModel)
  {
      // console.log(product); 
      this.addToCartProduct.emit(product);
  }*/

}
