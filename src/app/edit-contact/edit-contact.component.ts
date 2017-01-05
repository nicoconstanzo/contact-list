import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ContactService }             from '../services/contact.service';
import { Contact }                    from '../contact';

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent implements OnInit {
  contact: Contact;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private contactService: ContactService)
  { }

  ngOnInit(): void {
    // Extract the id parameter from the url path and then use the ContactService to fetch the contact with that id.
    this.route.params
      .switchMap((params: Params) => this.contactService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

  // Update the contact
  update(contact: Contact): void {
    this.contactService.update(contact);
  }

  // Go to previous page
  goBack(): void {
    this.location.back();
  }
}
