import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './contact-form.component';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ContactFormRoutingModule
  ]
})
export class ContactFormModule { }
