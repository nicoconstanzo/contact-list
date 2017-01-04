import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { Subject }              from 'rxjs/Subject';

import { ContactSearchService } from '../services/contact-search.service';
import { Contact }              from '../contact';

@Component({
  selector: 'contact-search',
  templateUrl: './contact-search.component.html',
  providers: [ContactSearchService]
})
export class ContactSearchComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(private contactSearchService: ContactSearchService,
    private router: Router) { }

  ngOnInit(): void {
    this.contacts = this.searchTerms
      .debounceTime(300) // give a 300ms pause between events to save on unnecessary HTTP requests
      .distinctUntilChanged() // ignore if next search term remains the same
      .switchMap(term => term  // switch to new observable each time (discards old previous observables)
        // return the http search observable
        ? this.contactSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Contact[]>([]))
      .catch(error => {
        // Just for demo purposes. On a real app this should be logged.
        console.log(error);
        return Observable.of<Contact[]>([]);
      });
  }

  // Pushes the search term into the observable stream. Each call to search puts a new string into this subject's observable stream by calling next()
  search(term: string): void {
    this.searchTerms.next(term);
  }

  // Go to the Contact card.
  goToDetail(contact: Contact): void {
    let link = ['/detail', contact.id];
    this.router.navigate(link);
  }
}
