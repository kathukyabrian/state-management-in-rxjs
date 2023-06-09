import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListingComponent } from './friend-listing/friend-listing.component';
import { FriendCreateComponent } from './friend-create/friend-create.component';

const routes: Routes = [
  {
    path: '',
    component: FriendCreateComponent
  },
  {
    path: 'list',
    component: FriendListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
