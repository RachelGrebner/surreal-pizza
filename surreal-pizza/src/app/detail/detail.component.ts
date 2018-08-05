import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../models/pizza';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaValidators } from '../Validators/pizza-validators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  detailForm: FormGroup;
  JSON : any;
  constructor(private route: ActivatedRoute, 
  private pizzaService: PizzaService, 
  private router: Router,
  private fb: FormBuilder) { 
    this.JSON = JSON;
  }

  ngOnInit() {
    this.pizzaService.get(parseInt(this.route.snapshot.params.id))
    .subscribe(
      data =>  {
        this.detailForm = this.fb.group({
          'id': [data.id],
          'name': [data.name, Validators.required],
          'shortDescription': [data.shortDescription, Validators.required],
          'longDescription': [data.longDescription, Validators.required],
          'price': [data.price,Validators.compose([Validators.required, PizzaValidators.priceValidator])],
          'pictureUrl': [data.pictureUrl]
        })
      },
      error => console.log(error)
    );
  }

  onSubmit(pizza: Pizza) {
    this.pizzaService.update(pizza)
    .subscribe(data => {this.router.navigate(['/menu']);},
    error => console.log(error));
  }

  goBack(): void {
    this.router.navigateByUrl('/menu');
  }
}
