import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroListComponent} from './hero-list.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

const routing = RouterModule.forChild([
  {
    path: '',
    component: HeroListComponent, data: {title: 'Heroes List'}
  },
]);

@NgModule({
  imports: [BrowserModule, CommonModule, routing],
  declarations: [HeroListComponent],
  exports: [HeroListComponent, RouterModule],
})
export class HeroListModule { }
