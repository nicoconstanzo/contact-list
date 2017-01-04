import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../contact';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  error: any;

  constructor(
    private router: Router,
    private contactService: ContactService)
  {

  }

  ngOnInit(): void {
    // Obtain the list of contacts when the Component is created.
    this.getContacts();
  }

  // The ContactService returns a Promise. Once the Promise is successfully resolved, display the Contacts
  getContacts(): void {
    this.contactService
      .getContacts()
      .then(contacts => this.contacts = contacts);
  }

  // Sets the selectedContact property to the Contact the user has clicked.
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  // Go to the specific Contact to show all the details
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedContact.id])
  }

  addContact(): void {

  }
}
