import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'agentlogin',
    loadChildren: () => import('./agentlogin/agentlogin.module').then( m => m.AgentloginPageModule)
  },

  {
    path:'agentmain',
    loadChildren:()=>import('./pages/agentmain/agentmain.module').then(m=>m.AgentmainPageModule) 
  },
  {
    path: 'driverlist',
    loadChildren: () => import('./pages/driverlist/driverlist.module').then( m => m.DriverlistPageModule)
  },  {
    path: 'adddriver',
    loadChildren: () => import('./pages/adddriver/adddriver.module').then( m => m.AdddriverPageModule)
  },
  {
    path: 'addagent',
    loadChildren: () => import('./pages/addagent/addagent.module').then( m => m.AddagentPageModule)
  },
  {
    path: 'agentlist',
    loadChildren: () => import('./pages/agentlist/agentlist.module').then( m => m.AgentlistPageModule)
  },
  {
    path: 'trucklist',
    loadChildren: () => import('./pages/trucklist/trucklist.module').then( m => m.TrucklistPageModule)
  },
  {
    path: 'binlist',
    loadChildren: () => import('./pages/binlist/binlist.module').then( m => m.BinlistPageModule)
  },
  {
    path: 'addbin',
    loadChildren: () => import('./pages/addbin/addbin.module').then( m => m.AddbinPageModule)
  },
  {
    path: 'addtruck',
    loadChildren: () => import('./pages/addtruck/addtruck.module').then( m => m.AddtruckPageModule)
  },
  {
    path: 'mapbox',
    loadChildren: () => import('./pages/mapbox/mapbox.module').then( m => m.MapboxPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
