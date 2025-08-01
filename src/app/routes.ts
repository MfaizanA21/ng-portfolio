import { Routes } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ServiceComponent } from "./service/service.component";
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServiceComponent},
  {path: 'about', component: AboutComponent},
];