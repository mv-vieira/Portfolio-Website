import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailSendComponent } from './email-send.component';

const routes: Routes = [
  {path:'', component:EmailSendComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailSendRoutingModule { }
