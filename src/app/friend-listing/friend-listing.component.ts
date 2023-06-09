import { Component, Input, OnInit } from '@angular/core';
import { eventDispatcher, store } from '../store';
import { Action } from '../store/action';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-listing',
  templateUrl: './friend-listing.component.html',
  styleUrls: ['./friend-listing.component.css']
})
export class FriendListingComponent implements OnInit {
  @Input() friends: Array<Friend> = [];

  constructor(){}

  ngOnInit(): void {
    
  }

  deleteFriend(email:string){
    eventDispatcher.next({type:Action.DELETE_FRIEND, payload: email});
  }
}
