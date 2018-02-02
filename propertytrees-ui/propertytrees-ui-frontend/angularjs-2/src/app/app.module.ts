import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ArchitectComponent } from './architect/architect.component';
import { LegalConsultantComponent } from './legal-consultant/legal-consultant.component';
import { AstrologerComponent } from './astrologer/astrologer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SearchComponent,
    MainComponent,
    SearchListComponent,
    ArchitectComponent,
    LegalConsultantComponent,
    AstrologerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    [
    {
    path: '' ,
    component: MainComponent
    },
    {
    path: 'searchList' ,
    component: SearchListComponent
    },
    {
    path: 'astrologer' ,
    component: AstrologerComponent
    },
    {
    path: 'architect' ,
    component: ArchitectComponent
    },
    {
    path: 'legal-consultant' ,
    component: LegalConsultantComponent
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
