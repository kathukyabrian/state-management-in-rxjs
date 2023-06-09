import { Component } from '@angular/core';
import { eventDispatcher } from '../store';
import { Action } from '../store/action';

@Component({
  selector: 'app-friend-create',
  templateUrl: './friend-create.component.html',
  styleUrls: ['./friend-create.component.css']
})
export class FriendCreateComponent {
  constructor() { }

  friend = {
    id: '',
    name: '',
    email: '',
    phoneNumber: ''
  }

 

  addFriend() {
    eventDispatcher.next({type:Action.CREATE_FRIEND, payload:this.friend});
    this.resetFriend();
  }

  resetFriend(){
    this.friend = {
      id: '',
      name: '',
      email: '',
      phoneNumber: ''
    }
  }

}
