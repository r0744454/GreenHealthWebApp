import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SecurityModule } from './security/security.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticatedModule } from './authenticated/authenticated.module';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    SecurityModule,
    AuthenticatedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
