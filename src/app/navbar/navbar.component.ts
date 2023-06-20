import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  hamburguer: any = document.querySelector(".hamburguer");

  hamburguerClick(){
    let navbar  = document.querySelector(".nav-bar");
    navbar?.classList.toggle("active");
    
  }

  constructor(){}
}
