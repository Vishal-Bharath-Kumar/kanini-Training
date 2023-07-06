import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlandRideComponent } from './addland-ride.component';

describe('AddlandRideComponent', () => {
  let component: AddlandRideComponent;
  let fixture: ComponentFixture<AddlandRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlandRideComponent]
    });
    fixture = TestBed.createComponent(AddlandRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
