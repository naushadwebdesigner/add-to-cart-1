
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent { 

  products: any[] = []  ;

  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.http.get<any[]>("https://fakestoreapi.com/products").
    subscribe(res => {
      this.products = res
    })

  }





}
