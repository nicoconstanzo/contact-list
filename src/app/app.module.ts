import './rxjs-extensions';
import { NgModule }       from '@angular/core'
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';

import { AppComponent }     from './app.component';
import { rootRouterConfig } from './app.routes';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule }  from 'angular-in-memory-web-api';
import { InMemoryDataService }   from './in-memory-data.service';

import { AboutComponent }           from './about/about.component';
import { HomeComponent }            from './home/home.component';
import { NavbarComponent }          from './navbar/navbar.component';
import { AddContactComponent }      from './add-contact/add-contact.component';
import { ContactsComponent }        from './contacts/contacts.component';
import { ContactDetailComponent }   from './contact-detail/contact-detail.component';
import { ContactSearchComponent }   from './contact-search/contact-search.component';

import { ContactService }   from './services/contact.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    AddContactComponent,
    ContactDetailComponent,
    NavbarComponent,
    ContactSearchComponent
  ],
  providers: [
    ContactService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
