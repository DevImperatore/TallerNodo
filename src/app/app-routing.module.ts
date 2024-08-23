import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },          // Ruta para la página de inicio
  { path: 'about', component: AboutComponent },     // Ruta para la página "Acerca de"
  { path: 'contact', component: ContactComponent }   // Ruta para la página de contacto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
