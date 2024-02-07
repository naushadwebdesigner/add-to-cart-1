import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../modal/product';
import { ProductService } from '../../services/product.service';
import { CartComponent } from '../cart/cart.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, CartComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  

  httpClient = inject(HttpClient);
  productService = inject(ProductService)
  data: Product[] = [];

 

  ngOnInit(): void { this.fetchData() }

  fetchData = async () => {
      this.httpClient.get("https://fakestoreapi.com/products").
      subscribe((data: any) => {
        this.data = data;
      
    })

  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }

  

  



}
