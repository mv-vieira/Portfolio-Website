import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;

  submit(){
    if(this.contactForm.invalid){
      return;
    }

    console.log("Formulário enviado!")
  }


  constructor(){ }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required]),
      assunto: new FormControl('', [Validators.required]),
      textarea: new FormControl('', [Validators.nullValidator])
    })
  }

  get nome(){
    return this.contactForm.get(['nome'])!;
  }

  get email() {
    return this.contactForm.get(['email'])!;
  }

  get assunto(){
    return this.contactForm.get(['assunto'])!;
  }


}
