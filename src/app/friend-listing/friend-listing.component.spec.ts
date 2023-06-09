import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListingComponent } from './friend-listing.component';

describe('FriendListingComponent', () => {
  let component: FriendListingComponent;
  let fixture: ComponentFixture<FriendListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendListingComponent]
    });
    fixture = TestBed.createComponent(FriendListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
