import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  providers: [provideNativeDateAdapter()],
  selector: 'app-dummy-booking',
  templateUrl: './dummy-booking.component.html',
  styleUrl: './dummy-booking.component.css',
})
export class DummyBookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      roomId: new FormControl({ value: '2', disabled: true }),
      questEmail: new FormControl(''),
      checkingDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      guests: this.formBuilder.array([
        this.formBuilder.group({ guestName: [''], age: new FormControl('') }),
      ]),
    });
  }

  formSubmit() {
    console.log(this.bookingForm.getRawValue());
  }

  addGuest(){
    this.guests.push(this.formBuilder.group({ guestName: [''], age: new FormControl('') }),) 
  }
}
