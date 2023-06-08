import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm = this.fb.group({
    nome:["",[
      
    ]]
  })

  constructor(
    private fb: FormBuilder
  ){ }
}
