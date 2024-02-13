import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Product } from '../../services/modals/product.model';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  auth = inject(MainService)

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
    if (product.quantity < 5) {
      product.quantity++;
    }

  }

  decrementQuantity(product: any) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }


  itemCart: any = [];

  addToCart(product: any) {




    let cartDetaNull = localStorage.getItem("localCart");

    if (cartDetaNull == null) {
      let storeData: any = [];
      storeData.push(product);
      localStorage.setItem("localCart", JSON.stringify(storeData))
    }
    else {
      let id = product.id
      let index = -1;
      this.itemCart = JSON.parse(localStorage.getItem('localCart') as string)

        for(let i = 0; i < this.itemCart.length; i++ ) {
          if(parseInt(id) === parseInt(this.itemCart[i].id)){
            this.itemCart[i].quantity = product.quantity
            index = i;
            break;
          }
        }

        if(index == -1) {
          this.itemCart.push(product)
          localStorage.setItem('localCart', JSON.stringify(this.itemCart) )
        }
        else {
          localStorage.setItem('localCart', JSON.stringify(this.itemCart) )
        }



    }

    this.getCartCount();
    
  

  } 



  electronic(products: any) {

  }

cartCount: number = 0;


getCartCount() {
  let getLocalstorage = JSON.parse(localStorage.getItem('localCart') as string)
  this.cartCount = getLocalstorage.length;
  this.auth.cartSubject.next(this.cartCount)  
}




}
