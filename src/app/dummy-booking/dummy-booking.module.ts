import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyBookingRoutingModule } from './dummy-booking-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyBookingComponent } from './dummy-booking.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [DummyBookingComponent],
  imports: [
    CommonModule,
    DummyBookingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule

  ],
})
export class DummyBookingModule {}
