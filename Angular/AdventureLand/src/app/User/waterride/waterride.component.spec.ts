import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterrideComponent } from './waterride.component';

describe('WaterrideComponent', () => {
  let component: WaterrideComponent;
  let fixture: ComponentFixture<WaterrideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterrideComponent]
    });
    fixture = TestBed.createComponent(WaterrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
