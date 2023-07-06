import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandRideComponent } from './admin-land-ride.component';

describe('AdminLandRideComponent', () => {
  let component: AdminLandRideComponent;
  let fixture: ComponentFixture<AdminLandRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLandRideComponent]
    });
    fixture = TestBed.createComponent(AdminLandRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
