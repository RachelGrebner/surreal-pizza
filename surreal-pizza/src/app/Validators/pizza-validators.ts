import { FormControl } from '@angular/forms'

export class PizzaValidators {

    static priceValidator(control: FormControl): { [s: string]: boolean } {
        if (!control.value) {
            return;
        }
        
if(parseFloat(control.value) && !isNaN(control.value)){ 
       //do nothing
   } 
   else {
       return { invalidPrice: true };
   }
    }
}