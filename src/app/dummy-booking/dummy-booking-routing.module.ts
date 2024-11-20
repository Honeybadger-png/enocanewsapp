import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyBookingComponent } from './dummy-booking.component';

const routes: Routes = [
  {
    path: 'booking',
    component: DummyBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DummyBookingRoutingModule { }
