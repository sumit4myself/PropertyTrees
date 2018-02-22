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
import { DealersComponent } from './dealers/dealers.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ProjectsComponent } from './projects/projects.component';
import { PropertyGalleryComponent } from './property-gallery/property-gallery.component';
import { QuestionComponent } from './question/question.component';
import { CommercialComponent } from './commercial/commercial.component';
import { UserService } from './header/sign_up.service';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SubFooterComponent } from './sub-footer/sub-footer.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurclientsComponent } from './ourclients/ourclients.component';
import { OurpricingComponent } from './ourpricing/ourpricing.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';




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
    AstrologerComponent,
    CommercialComponent,
    CustomerSupportComponent,
    DealersComponent,
    ProjectsComponent,
    PropertyGalleryComponent,
    QuestionComponent,
    SubHeaderComponent,
    SubFooterComponent,
    AboutComponent,
    OurservicesComponent,
    OurclientsComponent,
    OurpricingComponent,
    ContactusComponent
    
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
    path: 'dealer' ,
    component: DealersComponent
    },
    {
    path: 'astrologer' ,
    component: AstrologerComponent
    }
    ,
    {
    path: 'customerSupport' ,
    component: CustomerSupportComponent
    },
    {
    path: 'architect' ,
    component: ArchitectComponent
    },
  
    {
      path: 'consultant' ,
      component: LegalConsultantComponent
      },
      {
        path: 'commercial' ,
        component: CommercialComponent
        },

    {
    path: 'question' ,
    component: QuestionComponent
    },

    {
      path: 'about' ,
      component: AboutComponent
      },

      {
     path: 'ourpricing' ,
     component: OurpricingComponent
     },
      {
      path: 'ourclients' ,
      component: OurclientsComponent
      },
      {
      path: 'ourservices' ,
      component: OurservicesComponent
       },
            {
              path: 'contactus' ,
              component: ContactusComponent
              },



    {
    path: 'gallery' ,
    component: PropertyGalleryComponent
    }
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
