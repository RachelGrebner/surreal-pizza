import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
import { Router } from '@angular/router';
import { Pizza } from '../models/pizza';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaValidators } from '../Validators/pizza-validators';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {
detailForm : FormGroup

  constructor(private pizzaService: PizzaService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.detailForm = this.fb.group({
          'name': ["", Validators.required],
          'shortDescription': ["", Validators.required],
          'longDescription': ["", Validators.required],
          'pictureUrl': [""],
          'price': ["",Validators.compose([Validators.required, PizzaValidators.priceValidator])]
    });
  }

  onSubmit(pizza: Pizza) {
    this.pizzaService.create(pizza)
    .subscribe(
      data => this.router.navigate(['menu']),
      error => console.log(error)
    );
  }

}
