import { Component } from '@angular/core';
import { CartProductModel } from '../product-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {

  cartProducts:CartProductModel[]=[];
  producttotal: number[] = [];
  overalltotal=0;
  addProductToCart(cartProduct:CartProductModel){
    
    console.log("Adding product to cart (CartList)", cartProduct);

    let existingProduct = this.cartProducts.find(data => data.id == cartProduct.id);
    if(existingProduct){
      existingProduct.quantity++;
      console.log(existingProduct);
    }
    else
    {
      cartProduct.quantity = 1;
      this.cartProducts.push(cartProduct);
    }
  }

  removeProduct(product:CartProductModel,index:number){
    this.cartProducts.splice(index,1);
    this.overalltotal = this.overalltotal - (product.quantity * product.price);
   
   
    
  }

  total(){
        for (let i = 0; i < this.cartProducts.length; i++) {
          this.producttotal[i] = this.cartProducts[i].quantity * this.cartProducts[i].price

        }
        let sum: number = 0;
        for (let i = 0; i < this.producttotal.length; i++) {
          sum = sum + this.producttotal[i];
        }
        this.overalltotal = sum;
  }
  emptyCart(){
    this.cartProducts = [];
    this.producttotal = [];
    this.overalltotal = 0;
    
  }

 
  

}