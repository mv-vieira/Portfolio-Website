import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailSendRoutingModule } from './email-send-routing.module';
import { EmailSendComponent } from './email-send.component';


@NgModule({
  declarations: [EmailSendComponent],
  imports: [
    CommonModule,
    EmailSendRoutingModule
  ]
})
export class EmailSendModule { }
