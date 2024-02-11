import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from './modals/product.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {



   }


  cartSubject = new Subject<any>();


}
