import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PublicationsComponent } from './views/publications/publications.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalModule
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
