// import { Component, inject } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { ProductService } from '../../services/product.service';
// import { Product } from '../../modal/product';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterLink],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent {

//   productService = inject(ProductService);  
//   counterCart :any = this.productService.getData().length;

//   productTotal: any = this.productService.getData();

//   count!: number;

//   constructor() {
//     this.productService.count$.subscribe(value => {
//       this.count = value;
//     });
//   }


// }

import { Component, OnInit, Signal, WritableSignal, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../modal/product';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

  productService = inject(ProductService);
  cartCounter= this.productService.getData().length;


  constructor() { }
  
  ngOnInit(): void {
    this.updateCartCounter();
  }

  updateCartCounter() {
    this.cartCounter = this.productService.getData().length;
  }
  


  



  
  
}









