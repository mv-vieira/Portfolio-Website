import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private route: Router
  ){ }

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


  async enviarEmail(){

    if(this.contactForm.invalid){
      return;

    } else {

      emailjs.init("Zqd5xA-uvrYz4avtl");
      let response = await emailjs.send("service_jyny5v7","template_dnr6gjl",{
        from_name: this.contactForm.value.nome,
        to_name: "Matheus",
        email: this.contactForm.value.email,
        assunto: this.contactForm.value.assunto,
        message: this.contactForm.value.textarea,
        });

        this.route.navigate(["email-send"]);

    }



  }


}
