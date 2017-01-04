import { Injectable }     from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Contact } from '../contact';

/*
 * The contact service groups common functions that will be later accessed by different components without the need to reuse code.
*/
@Injectable()
export class ContactService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private contactsUrl = 'api/contacts';

  constructor(private http: Http) { }

  /**  Returns all the contacts from our in-memory Web API as a promise.
   * In this case (with this kind of API), an object with a data prperty is returned.
   * And this data holds the array of contacts
  */
  getContacts(): Promise<Contact[]> {
    return this.http.get(this.contactsUrl)
      .toPromise()
      .then(response => response.json().data as Contact[])
      .catch(this.handleError);
  }

  // Returns a promise that a hero with a certain id will be returned.
  getContact(id: number): Promise<Contact> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Contact)
      .catch(this.handleError)
  }

  // Add a contact to the Database
  create(email: string, firstName?: string, lastName?: string, address?: string, phone?: string): Promise<Contact> {
    return this.http
      .post(this.contactsUrl, JSON.stringify({email: email, firstName: firstName, lastName: lastName, address: address, phone: phone}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  // Remove contact
  delete(id: number): Promise<void> {
    const url = `${this.contactsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  // Update contact info
  update(contact: Contact): Promise<Contact> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http
      .put(url, JSON.stringify(contact), {headers: this.headers})
      .toPromise()
      .then(() => contact)
      .catch(this.handleError);
  }

  // Logs the error into the console. Only useful for demo purposes.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
