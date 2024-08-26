import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactComponent } from './contact/contact.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    ContactComponent,
    MainContentComponent,
    HabilidadesComponent,
    FooterComponent, 
    RouterModule, 
    NavbarComponent,
    ProyectosComponent,
    AboutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
}