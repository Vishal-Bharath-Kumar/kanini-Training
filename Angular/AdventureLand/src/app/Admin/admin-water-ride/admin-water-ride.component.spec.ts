import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWaterRideComponent } from './admin-water-ride.component';

describe('AdminWaterRideComponent', () => {
  let component: AdminWaterRideComponent;
  let fixture: ComponentFixture<AdminWaterRideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWaterRideComponent]
    });
    fixture = TestBed.createComponent(AdminWaterRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
