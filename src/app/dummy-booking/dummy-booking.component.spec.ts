import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyBookingComponent } from './dummy-booking.component';

describe('DummyBookingComponent', () => {
  let component: DummyBookingComponent;
  let fixture: ComponentFixture<DummyBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DummyBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
