import {Component} from '@angular/core';

// The app component only serves as a skeleton for the app, showing the navbar and the router outlet (where the components are loaded and viewed).
@Component({
  selector: 'app',
  template: `
    <navbar></navbar>
    <main class="container">
      <div class="row">
        <div class="col-xs-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `
})
export class AppComponent {
}
