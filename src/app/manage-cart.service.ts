import { Injectable } from '@angular/core';
import { CartProductModel, ProductModel } from './product-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageCartService {
  cartProducts:CartProductModel[]=[];
  constructor() { }
  loadComponent;
  addProduct(product:ProductModel){
    let existingProduct = this.cartProducts.find(data => data.id == product.id)
    if(existingProduct)
    {
          existingProduct.quantity = existingProduct.quantity + 1
    }
    else{
      this.cartProducts.push({
        id: product.id,
        name: product.name,
        price: product.price,
        is_available: product.is_available,
        image_url: product.image_url,
        quantity: 1
      });
    } 
    //console.log(this.cartProducts);
  }

  getCartProducts():Observable<any>{
    return of(this.cartProducts)
  }

  getCartProductsListLength():Observable<any>{
    return of(this.cartProducts.length);
  }
  removeProduct(product:CartProductModel)
  {
    this.cartProducts.splice(product.id,1)
  }
}
