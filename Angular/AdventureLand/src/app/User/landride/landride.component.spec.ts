import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandrideComponent } from './landride.component';

describe('LandrideComponent', () => {
  let component: LandrideComponent;
  let fixture: ComponentFixture<LandrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandrideComponent]
    });
    fixture = TestBed.createComponent(LandrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
