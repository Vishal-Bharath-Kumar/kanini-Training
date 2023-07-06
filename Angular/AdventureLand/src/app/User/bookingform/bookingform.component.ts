import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-bookingform',
  templateUrl: './bookingform.component.html',
  styleUrls: ['./bookingform.component.css']
})
export class BookingformComponent implements OnInit {
  bookingForm! : FormGroup;
  AddForm! :FormGroup;
  submitted = false;
  
  username!: string;
  emailId!: string;
  bookingDate!: string;
  price!: number;

  constructor(private formBuilder: FormBuilder,private api:ApiService) { }
  isPhoneDisabled: boolean = true;

  bookList:any={
    username:'',
    emailId:'',
    bookingDate:'',
    price :2500
  };

  submitForm(): void {
    this.api.addbook(this.bookList)
      .subscribe(
        response => {
          console.log('Booking saved successfully');
          alert("added")

          // Reset form values
          
        },
      );
  }

  ngOnInit(): void {
    const currentDate = new Date().toISOString().split('T')[0];
    let checkin = document.getElementById('date') as HTMLInputElement;
    checkin.min = currentDate;
    // this.bookingForm = this.formBuilder.group({
    //   // name: ['', Validators.required],
    //   // email: ['', [Validators.required, Validators.email]],
    //   // // phone: ['', Validators.required],
    //   // date: ['', Validators.required],
    //   // ticketType: ['', Validators.required],
    //   // numTickets: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
      
    // });

    // this.init();
  }

  get formControls() {
    return this.bookingForm.controls;
  }

  // onSubmit() {
  //   this.submitted = true;

  //   if (this.bookingForm.invalid) {
  //     return;
  //   }

  //   alert("Booked Successfully!!!")
  //   this.calladdbook();

  //   // Perform form submission or API call here
  //   console.log(this.bookingForm.value);
  // }
  // private init(): void{
  //   this.AddForm=this.formBuilder.group({
  //     userName:[],
  //     emailId:[],
  //     bookingDate:[],
  //     price:[]
  //   });
  // }


  //  calladdbook(): void{
  //   this.api.addbook(this.AddForm.value).subscribe((result) =>{
  //     alert('Data Added')

  //  });
  // }

}


