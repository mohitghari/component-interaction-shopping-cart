import { Component, OnInit, Input } from '@angular/core';
import { CartProductModel } from '../product-model';
import { ManageCartService } from '../manage-cart.service';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.css']
})
export class CartListItemComponent implements OnInit {

  @Input() product:CartProductModel
  constructor(private manageCart:ManageCartService) { }

  ngOnInit() {
  }


}
