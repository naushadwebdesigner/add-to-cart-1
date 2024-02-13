import { Component } from '@angular/core';
import { Product } from '../../services/modals/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


constructor() {}

ngOnInit(): void {
  this.cartDetails()
}

cartProduct : Product[] = [];
cartBull = false;
cartproSubtotal!: number;

cartDetails(){

  if(localStorage.getItem("localCart")) {
    this.cartProduct = JSON.parse(localStorage.getItem("localCart") as string)
    this.cartBull = true;
  
  }

}



decrementQuantity(item:any){
  console.log(item);  

}

incrementQuantity(item:any){
  console.log(item);  
  
}





}
