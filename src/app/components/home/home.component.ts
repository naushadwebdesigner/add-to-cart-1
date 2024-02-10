import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/modals/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<Product[]>("https://fakestoreapi.com/products")
      .subscribe(res => {
        //this.products = res.map(product => ({ ...product, quantity: 1 }));
        this.products = res.map(product => ({ ...product, quantity: 1 }));
      });
  }

  incrementQuantity(product: any) {
    if(product.quantity < 5) {
      product.quantity++;
    }
    
  }

  decrementQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  addToCart(product: any) {
    console.log("Added to cart:", product);
  }



  electronic(products:any) {


    

  }


}
