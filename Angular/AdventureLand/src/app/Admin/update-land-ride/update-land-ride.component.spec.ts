import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLandRideComponent } from './update-land-ride.component';

describe('UpdateLandRideComponent', () => {
  let component: UpdateLandRideComponent;
  let fixture: ComponentFixture<UpdateLandRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLandRideComponent]
    });
    fixture = TestBed.createComponent(UpdateLandRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
