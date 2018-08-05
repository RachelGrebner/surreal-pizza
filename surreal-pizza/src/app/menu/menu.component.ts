import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pizzas: Pizza[];
  constructor(private pizzaService: PizzaService) { }

  onPizzaSelected(pizza: Pizza): void {
    console.log('Pizza selected: ', pizza);
  }


  ngOnInit() {
    this.pizzaService.list()
    .subscribe(
      //1st funtion is success
      (data: Pizza[]) => this.pizzas = data,
      //2nd is error
      error => console.log(error)
    );
  }

}
