import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy2',
  template: `
  <ion-content color="light">
    <h1>Route 2</h1>
    <a [routerLink]="['..']" routerDirection="back">back to route 1</a><br> 
  </ion-content>`,
})
export class Dummy2Component {}
