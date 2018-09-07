import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { IncrementorElementComponent } from './incrementor-element/incrementor-element.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementorElementComponent
  ],
  entryComponents: [
    IncrementorElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(IncrementorElementComponent, { injector: this.injector });
    customElements.define('incrementor-element', element);
  }
}