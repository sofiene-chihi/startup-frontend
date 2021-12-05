import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StartupStatsComponent } from './components/startup-stats/startup-stats.component';
import { StartupsComponent } from './components/startups/startups.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'startups', component: StartupsComponent },
  { path: 'stats', component: StartupStatsComponent },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
