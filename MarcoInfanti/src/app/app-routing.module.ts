import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path:'aboutme', component: MainPageComponent },
  { path:'',  redirectTo:'/aboutme', pathMatch: 'full'},
  //{ path:'**', component: MainPageComponent },
  { path:'**', redirectTo:'/aboutme', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
