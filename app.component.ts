import { Component , OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,FormGroup,FormControl,Validators,NgForm} from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Country } from './Book'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})

export class AppComponent {
  test:number;
  test2:number = 2;
  
  signupForm:FormGroup; 
constructor(private frmbuilder:FormBuilder)  
   {  
    this.signupForm=frmbuilder.group({  
      'range': new FormControl('', Validators.required),
      'sample':  new FormControl('', this.specificValueInsideRange.bind(this))
    }); 
   }  
  ngOnInit() {  
  }  

  specificValueInsideRange(control: FormControl) {
    if(control.value === '' || parseInt(control.value)  == this.test2) {
      return  null;
    }
    return {
      specificValueInsideRange: true
    };
  }

  PostData(signupForm:NgForm)  
  {  
    console.log(this.test);
    console.log(signupForm.controls);  
  } 
  
  countries = [
    new Country(1, 'USA' ),
    new Country(2, 'India' ),
    new Country(3, 'Australia' ),
    new Country(4, 'Brazil')
 ];

}
