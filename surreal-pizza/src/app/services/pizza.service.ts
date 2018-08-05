import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  http: HttpClient;
  constructor(h: HttpClient) 
  {
    this.http = h;
  
  }
  list() {
    //can put url in config or service or something
    return this.http.get<Pizza[]>('http://localhost:5000/api/pizza');
  }

  get(id: number) {
    return this.http.get<Pizza>('http://localhost:5000/api/pizza/' + id);
  }

  create(pizza: Pizza) {
    return this.http.post<Pizza>('http://localhost:5000/api/pizza', pizza);
  }

  update(pizza: Pizza) {
    return this.http.put<Pizza>('http://localhost:5000/api/pizza', pizza);
  }
}
