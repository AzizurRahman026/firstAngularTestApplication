import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listint-photo" [src] = "housingLocation?.photo" alt="Details Page Phote">
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>

      <section>
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units Available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here...</h2>
        <form [formGroup] ="applyForm" (submit)="submitApplication()">
          <label for="firstName">First Name</label>
          <input id="firstName" type="text" formControlName="firstName">
          
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="text" formControlName="email">

          <button type="submit" class="primary">Apply Now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})



export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;



  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    // console.log(this.route.snapshot.params);
    const housingLocationId = Number(this.route.snapshot.params['id']);
    // console.log(this.housingLocationId);

    this.housingService.getHousingLocationById(housingLocationId).then(housingLocaton => {
        this.housingLocation = housingLocaton;
    });

    // this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }


  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
