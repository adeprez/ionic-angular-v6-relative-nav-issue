import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  template: `
  <ion-content>
    <h1>Route 1</h1>
    <a [routerLink]="[]">Stay on route 1 witout params</a><br>
    <a [routerLink]="[]" [queryParams]="{foo: 'bar'}">Stay on route 1 with query params</a><br>
    <a [routerLink]="['route2']">Go to route 2</a> 
  </ion-content>`,
})
export class DummyComponent {}
