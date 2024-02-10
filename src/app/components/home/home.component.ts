import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<any[]>("https://fakestoreapi.com/products")
      .subscribe(res => {
        this.products = res.map(product => ({ ...product, quantity: 1, bookvalue:5 }));
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
}
