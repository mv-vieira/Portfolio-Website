import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-send',
  templateUrl: './email-send.component.html',
  styleUrls: ['./email-send.component.css']
})
export class EmailSendComponent {

  constructor(private route:Router){}

  voltarInicio(){
    this.route.navigate(["about-me"]);
  }
}
