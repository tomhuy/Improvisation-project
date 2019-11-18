import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNameBranchFromVietnameseComponent } from './utilities/create-name-branch-from-vietnamese/create-name-branch-from-vietnamese.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: 'create-name-branch-from-vietnames', component: CreateNameBranchFromVietnameseComponent},
  {path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
