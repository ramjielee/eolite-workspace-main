import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './titles.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TitlesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: TitlesComponent
      }
    ])
  ]
})
export class TitlesModule { }
