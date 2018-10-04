import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroListComponent} from './hero-list/hero-list.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'crisis-center', component: CrisisListComponent},
  {path: '', component: HomeComponent},
  // { path: 'hero', loadChildren: "../app/" },
  {path: 'heroes', component: HeroListComponent, data: {title: 'Heroes List'}},
  // {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  // {path: 'heroes', loadChildren: './hero-list/hero-list.module#HeroListModule'}
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
