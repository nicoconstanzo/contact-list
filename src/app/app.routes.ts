import { Routes } from '@angular/router';

import { AboutComponent }           from './about/about.component';
import { HomeComponent }            from './home/home.component';
import { AddContactComponent }      from './add-contact/add-contact.component';
import { ContactsComponent }        from './contacts/contacts.component';
import { ContactDetailComponent }   from './contact-detail/contact-detail.component';

// Shows all the routing for the app and the components that are loaded according to the navigation path.
export const rootRouterConfig: Routes = [
  {
    path       : '',
    redirectTo : '/home',
    pathMatch  : 'full'
  },
  {
    path      : 'home',
    component : HomeComponent
  },
  {
    path      : 'add-contact',
    component : AddContactComponent
  },
  {
    path      : 'contacts',
    component : ContactsComponent
  },
  {
    path      : 'detail/:id',
    component : ContactDetailComponent
  },
  {
    path      : 'about',
    component : AboutComponent
  },
];

