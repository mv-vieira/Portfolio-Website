import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'about-me', pathMatch:'full'},

  {path:'portfolio', loadChildren: ()=> import('./portfolio-section/portfolio-section.module')
      .then(module => module.PortfolioSectionModule)},

  {path:'about-me', loadChildren: ()=> import('./about-me/about-me.module')
      .then(module => module.AboutMeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
