import { Component, OnInit } from '@angular/core';
import { eventDispatcher, store } from './store';
import { Action } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'friends-client';

  friends:any[] = [];

  constructor() {
    store.subscribe((state) => {
      const { friends } = state;
      this.friends = friends;
    });
  }

  ngOnInit(): void {
    eventDispatcher.next({type:Action.GET_FRIENDS});
  }
}
