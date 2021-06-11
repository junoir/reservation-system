import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Reservations } from '../reservation'

@Component({
	selector: 'app-reservations',
	templateUrl: './reservations.component.html',
	styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

	
	
	email = new FormControl('', [Validators.required, Validators.email]);

	getErrorMessage() {
		if (this.email.hasError('required')) {
		return 'You must enter a value';
		}

		return this.email.hasError('email') ? 'Not a valid email' : '';
	}

	reservation: Reservations[];
	selectedReservation: Reservations = {
		fName: null,
		lName: null,
		email: null,
		room_reserved: null,
		no_peolpe: null,
		checkin_date: null,
		checkout_date: null,
		telephone: null,
	};

	constructor(private apiService: ApiService, private  router:  Router) { }

	ngOnInit(): void {
	}

	createReservations(form: { value: Reservations; }) {
		this.apiService.createReservation(form.value).subscribe((reservation: Reservations) => {
			this.router.navigate(['dashboard']);
		});
	}

	getReservations(){
		this.apiService.getReservations().subscribe((reservations: Reservations[])=>{
			this.reservation = reservations;
			console.log(this.reservation);
		  })
	}

	selectReservation(reservation: Reservations) {
		this.selectedReservation = reservation;
	}

}
