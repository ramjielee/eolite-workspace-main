import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitlesComponent } from './titles/titles.component';

const routes: Routes = [
  {path: '', redirectTo: '/titles', pathMatch:'full'},
  {path: 'titles', component: TitlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
