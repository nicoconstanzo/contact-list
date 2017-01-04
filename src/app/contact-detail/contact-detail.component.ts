import { Component, Input, OnInit }   from '@angular/core';
import { ActivatedRoute, Params }     from '@angular/router';
import { Location }                   from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ContactService }             from '../services/contact.service';
import { Contact }                    from '../contact';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html'
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  confirmDelete: boolean = false;

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

  delete(contact: Contact): void {
    this.contactService.delete(contact.id)
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
