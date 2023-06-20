import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },

  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio-section/portfolio-section.module').then(
        (module) => module.PortfolioSectionModule
      ),
  },

  {
    path: 'about-me',
    loadChildren: () =>
      import('./about-me/about-me.module').then(
        (module) => module.AboutMeModule
      ),
  },

  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((module) => module.SkillsModule),
  },

  {
    path: 'contact',
    loadChildren: () =>
      import('./contact-form/contact-form.module').then(
        (module) => module.ContactFormModule
      ),
  },

  {
    path: 'email-send',
    loadChildren: () =>
      import('./email-send/email-send.module').then(
        (module) => module.EmailSendModule
      ),
  },

  {
    path:'**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
