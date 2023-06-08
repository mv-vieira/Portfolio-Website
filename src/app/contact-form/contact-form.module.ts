import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormComponent } from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ContactFormRoutingModule
  ]
})
export class ContactFormModule { }
