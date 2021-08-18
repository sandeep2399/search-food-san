import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurentDetailComponent } from './restaurent-detail/restaurent-detail.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';

const routes: Routes = [
  
  { path: 'restaurent-list', component: RestaurentListComponent },
  { path: 'restaurent-detail/:name', component: RestaurentDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'restaurent-list' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
