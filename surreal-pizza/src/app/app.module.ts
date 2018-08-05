import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DetailComponent } from './detail/detail.component';
import { CreatePizzaComponent } from './create-pizza/create-pizza.component';

import { PizzaService } from './services/pizza.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'detail/:id', component: DetailComponent},
  { path: 'create', component: CreatePizzaComponent }
 ];
 

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    HomeComponent,
    MenuComponent,
    DetailComponent,
    CreatePizzaComponent
  ],
  imports: [
   BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
