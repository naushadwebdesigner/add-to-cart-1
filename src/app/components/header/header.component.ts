import { Component, inject } from '@angular/core';
import { MainService } from '../../services/main.service';



@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { 

  auth = inject(MainService)

  constructor() {

    this.auth.cartSubject.subscribe((data) => {
      this.cartCount = data;
    })

  }

  ngOnInit() {
    this.getCartCount()
  }

  

cartCount: number = 0;


getCartCount() {
  let getLocalstorage = JSON.parse(localStorage.getItem('localCart') as string)
  this.cartCount = getLocalstorage.length;



}


}
