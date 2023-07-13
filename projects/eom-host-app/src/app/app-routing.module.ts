import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { TitlesComponent } from './titles/titles.component';

const EOM_TITLES_REMOTE_APP_URL = "http://localhost:4300/remoteEntry.js";
const EXTERNAL_REMOTE_APP = "http://localhost:4400/remoteEntry.js";
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'titles', component:TitlesComponent},
  //load mfe or the eom-title-remote-app
  {
    path: 'titles2',
    loadChildren: ()=>{
        return loadRemoteModule({
          remoteEntry: EOM_TITLES_REMOTE_APP_URL,
          remoteName: "eomTitleRemoteApp",
          exposedModule: "./TitlesModule"
        }).then(m => m.TitlesModule).catch(err => console.log(err))
      }
  },
  { //calling external application(outside EOLite-Workspace)
    path: 'dmsTest',
    loadChildren: ()=>{
        return loadRemoteModule({
          remoteEntry: EXTERNAL_REMOTE_APP,
          remoteName: "dmsTestApp",
          exposedModule: "./MainAppModule"
        }).then(m => m.MainAppModule).catch(err => console.log(err))
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
