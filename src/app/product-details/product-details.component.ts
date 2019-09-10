import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { products } from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  addToCart(product){
      window.alert("The product has been added to your cart");
      this.cartservice.addToCart(product);
    }
  constructor(private route : ActivatedRoute,
  private cartservice: CartService) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {this.product = products[+params.get('productId')]})
  }

}