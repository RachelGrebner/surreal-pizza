import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Pizza} from '../models/pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzaList: Pizza[];
  @Output() pizzaSelectedChanged: EventEmitter<Pizza>;
constructor() {
  this.pizzaSelectedChanged = new EventEmitter();
}

  ngOnInit() {
  }

  pizzaSelected(pizza: Pizza): void {
    this.pizzaSelectedChanged.emit(pizza);
  }

}
