import { Subject } from 'rxjs';
import { Action } from './action';
import { Friend } from '../friend';
// import { Note } from '../note-card/note-card.component';

interface InitialState {
    friends: Array<any>;
}

let state: InitialState = {
    friends: [],
};

interface Event {
    type: String;
    payload?: Object;
}

export const store = new Subject<InitialState>();
export const eventDispatcher = new Subject<Event>();

eventDispatcher.subscribe((data: Event) => {
    switch (data.type) {
        case Action.GET_FRIENDS:
            store.next(state);
            break;

        case Action.CREATE_FRIEND:
            console.log(data.payload);
            state = {
                friends: [...state.friends, data.payload],
            };
            store.next(state);
            break;

        case Action.DELETE_FRIEND:
            const { friends } = state;
            const email = data.payload;
            const updatedFriends = friends.filter((friend: Friend) => friend.email !== email);
            state = {
                friends: updatedFriends
            };
            store.next(state);
            break;
        default:
            break;
    }
});

