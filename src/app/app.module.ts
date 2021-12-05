import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AboutusComponent } from './components/home/aboutus/aboutus.component';
import { TemoignagesComponent } from './components/home/temoignages/temoignages.component';
import { TemoignageComponent } from './components/home/temoignages/temoignage/temoignage.component';
import { StatsComponent } from './components/home/stats/stats.component';
import { ContactusComponent } from './components/home/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StartupsComponent } from './components/startups/startups.component';
import { SHeaderComponent } from './components/startups/s-header/s-header.component';
import { StartupListComponent } from './components/startups/startup-list/startup-list.component';
import { StartupCardComponent } from './components/startups/startup-card/startup-card.component';
import { HttpClientModule } from '@angular/common/http';
import { StartupStatsComponent } from './components/startup-stats/startup-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    AboutusComponent,
    TemoignagesComponent,
    TemoignageComponent,
    StatsComponent,
    ContactusComponent,
    FooterComponent,
    StartupsComponent,
    SHeaderComponent,
    StartupListComponent,
    StartupCardComponent,
    StartupStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
