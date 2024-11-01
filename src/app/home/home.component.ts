import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter By City...">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="result">
      <app-housing-location *ngFor="let houseLocation of housingLocationList" [housingLocation]="houseLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {

    this.housingService.getAllHOusingLocations().then((housingLocationLst: HousingLocation[]) => {
      this.housingLocationList = housingLocationLst;
    });





    // this.housingLocationList = this.housingService.getAllHOusingLocations();
    
  }
}
