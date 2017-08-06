import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewDirectiveDirective } from './new-directive.directive';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewDirectiveDirective,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
