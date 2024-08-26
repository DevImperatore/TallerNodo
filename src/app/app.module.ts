import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProyectosComponent } from './proyectos/proyectos.component';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    AppComponent,
    MainContentComponent,
    HabilidadesComponent,
    BrowserModule,
    NavbarComponent,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    ReactiveFormsModule,
    ContactComponent,
    ProyectosComponent,
    AboutComponent,
  ],
  providers: [],
})
export class AppModule { }
