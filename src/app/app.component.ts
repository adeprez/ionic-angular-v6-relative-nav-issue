import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: ['router-outlet, ion-router-outlet {height 50vh}'],
})
export class AppComponent {
  ionic = true;

  constructor(public activatedRoute: ActivatedRoute) {}
}
