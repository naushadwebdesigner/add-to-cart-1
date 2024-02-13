import { Component, inject } from '@angular/core';
import { MainService } from '../../services/main.service';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-header', 
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { 

  cartCount: number = 0;
  proDetails:any[]=[];

  auth = inject(MainService)

  constructor() {
    this.auth.cartSubject.subscribe((data) => {
      this.cartCount = data;
    })

  }



  ngOnInit() {
    this.getCartCount()
    
  }

  




getCartCount() {
  let getLocalstorage = JSON.parse(localStorage.getItem('localCart') as string)
  this.cartCount = getLocalstorage.length;
}




}
