import { NgModule,Injector, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  //bootstrap:    [ AppComponent ]
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[HelloComponent]
})
export class AppModule {
  constructor(injector: Injector) {
        // Convert `PopupComponent` to a custom element.
        const elem = createCustomElement(HelloComponent, { injector });
        // Register the custom element with the browser.
        customElements.define('hello-hi', elem);
    }
      ngDoBootstrap() { }

 }
