import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Contact } from '../contact';

@Injectable()
export class ContactSearchService {
  constructor(private http: Http) { }

  // Sends search queries to our Web API.
  search(term: string): Observable<Contact[]> {
    return this.http
      .get(`app/contacts/?email=${term}`)
      .map((r: Response) => r.json().data as Contact[]);
  }

}
