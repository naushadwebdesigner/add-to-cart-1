// // import { Injectable } from '@angular/core';
// // import { Product } from '../modal/product';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ProductService {


// //   productData: Product[] = [];

// //   constructor() { }

// //   addToCart(product: Product): void {
// //     this.productData.push(product);
// //   }

// //   getData(){
// //     return this.productData
// //   }

  


// // }


// // import { Injectable } from '@angular/core';
// // import { Product } from '../modal/product';



// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class ProductService {
// //   private localStorageKey = 'productData';

// //   constructor() { }

// //   addToCart(product: Product): void {
// //     let productData: Product[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
// //     productData.push(product);
// //     localStorage.setItem(this.localStorageKey, JSON.stringify(productData));
// //   }

// //   getData(): Product[] {
// //     let storedData = localStorage.getItem(this.localStorageKey);
// //     if (storedData) {
// //       return JSON.parse(storedData);
// //     } else {
// //       return [];
// //     }
// //   }

  
// // }


// import { Injectable } from '@angular/core';
// import { Product } from '../modal/product';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private localStorageKey = 'productData';
//   private cartUpdatedSubject = new BehaviorSubject<void>(undefined);

//   constructor() { }

//   addToCart(product: Product): void {
//     let productData: Product[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
//     productData.push(product);
//     localStorage.setItem(this.localStorageKey, JSON.stringify(productData));
//     this.cartUpdatedSubject.next(); // Emit signal
//   }

//   getData(): Product[] {
//     let storedData = localStorage.getItem(this.localStorageKey);
//     if (storedData) {
//       return JSON.parse(storedData);
//     } else {
//       return [];
//     }
//   }

  


//   getCartUpdatedSignal() {
//     return this.cartUpdatedSubject.asObservable();
    
//   }
// }


// import { Injectable } from '@angular/core';
// import { Product } from '../modal/product';
// import { BehaviorSubject } from 'rxjs';



// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private localStorageKey = 'productData';

//   private countSource = new BehaviorSubject<number>(0);
//   count$ = this.countSource.asObservable();
  

//   constructor() { }

//   addToCart(product: Product): void {
//     let productData: Product[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
//     productData.push(product);
//     localStorage.setItem(this.localStorageKey, JSON.stringify(productData));  
//   }

//   getData(): Product[] {
//     let storedData = localStorage.getItem(this.localStorageKey);
//     if (storedData) {
//       return JSON.parse(storedData);
//     } else {
//       return [];
//     }
//   }


// // count: WritableSignal<number> = signal(0); 

// updateCount(newValue: number) {
//   this.countSource.next(newValue);
// }

  
// }

import { Injectable } from '@angular/core';
import { Product } from '../modal/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private localStorageKey = 'productData';

  countSource = new BehaviorSubject<number>(0);
  count$ = this.countSource.asObservable();

  constructor() { }

  addToCart(product: Product): void {
    let productData: Product[] = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
    productData.push(product);
    localStorage.setItem(this.localStorageKey, JSON.stringify(productData));  
  }

  getData(): Product[] {
    let storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return [];
    }
  }


  
}







