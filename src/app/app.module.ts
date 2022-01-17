import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy.component';
import { Dummy2Component } from './dummy2.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: DummyComponent },
      { path: 'route2', component: Dummy2Component },
    ]),
  ],
  declarations: [AppComponent, DummyComponent, Dummy2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
