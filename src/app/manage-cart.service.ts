import { Injectable, OnInit } from '@angular/core';
import { CartProductModel, ProductModel } from './product-model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageCartService {

  private _cartProducts: CartProductModel[] = [];
  
  private _cartProductSubject: BehaviorSubject<CartProductModel[]> = new BehaviorSubject([]);
  cartProductSource$ = this._cartProductSubject.asObservable();

  getCartProducts(): Observable<CartProductModel[]> { 
    return this.cartProductSource$; 
  }
  addProduct(product: CartProductModel) {
    let existingProduct = this._cartProducts.find(data => data.id == product.id)
    if (existingProduct) {
      existingProduct.quantity = existingProduct.quantity + 1
    }
    else {
      product.quantity = 1;
      this._cartProducts.push(product);
    }
    this._cartProductSubject.next(this._cartProducts);
  }
  removeProduct(productToRemove: CartProductModel) {
    const index = this._cartProducts.findIndex(product => product.id == productToRemove.id);
    if (index >= 0) {
      this._cartProducts.splice(index, 1);
      this._cartProductSubject.next(this._cartProducts);
    }
  }
  emptyCartList() {
    this._cartProducts = [];  
    this._cartProductSubject.next(this._cartProducts);
  }
}
