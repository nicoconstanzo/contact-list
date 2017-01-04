import { Component, OnInit } from '@angular/core';
import { Contact }           from '../contact';

import { ContactService }  from '../services/contact.service';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent{
  submitted: boolean = false;
  model = new Contact(1, '', '', '', '', );

  constructor(private contactService: ContactService) {

  }

  // Uses the Contact Service to add a new contact to the database.
  addContact(): void {
    this.contactService.create(this.model.email, this.model.firstName, this.model.lastName, this.model.address, this.model.phone)
      .then(contact => {
        this.submitted = true
      });
  }


}
