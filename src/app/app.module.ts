import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';
import { ServicesComponent } from './services/services.component';
import {DataTableModule} from "angular-6-datatable";
 import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import 'hammerjs';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import { HeroesComponent } from './heroes/heroes.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
 
 
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MemberComponent,
    ServicesComponent,
    HeroesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    FormsModule,
    HttpModule,
    MatTabsModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatRadioModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatProgressSpinnerModule,
    NgxPaginationModule,  
    MatMenuModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    DataTableModule,
    MatAutocompleteModule,
    RouterModule.forRoot([   

     {
    path:'member',
    component:MemberComponent,

},
    
  
  {
    path:'heroes',
    component:HeroesComponent

 },

 {
    path:'product',
    component:ProductComponent
 },

 {
 path:'services',
 component:ServicesComponent
 },
 


    ]),
    
  ],
  

  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
export class MyOwnCustomMaterialModule { }
