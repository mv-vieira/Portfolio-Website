import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', redirectTo:'portfolio', pathMatch:'full'},

  {path:'portfolio', loadChildren: ()=> import('./portfolio-section/portfolio-section.module')
      .then(module => module.PortfolioSectionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
