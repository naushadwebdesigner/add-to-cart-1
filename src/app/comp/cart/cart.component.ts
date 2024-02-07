import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common'; // Import CommonModule



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

productService = inject(ProductService)

product = this.productService.getData()

// deleteItem(item:any) {
//   const index = this.product.indexOf(item);
//   if (index > -1) {
//     this.product.splice(index, 1);
//     localStorage.removeItem('productData'); // Replace 'yourKey' with the key used to store the data in localStorage
//   }
// }

deleteItem(item: any) {
  this.product = this.product.filter(productItem => productItem !== item);
  localStorage.setItem('productData', JSON.stringify(this.product));
}


calculateTotalPrice(): number {
  let totalPrice = 0;
  for (let item of this.product) {
    totalPrice += item.price;
  }
  return totalPrice;
}



}




