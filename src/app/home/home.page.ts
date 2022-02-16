import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PassengerService } from './data-access/passenger.service';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentPage$ = new BehaviorSubject<number>(1);

  // This bit is hidden for now, we will come to it in a moment
  currentPageData$ = this.currentPage$.pipe(
    switchMap((currentPage) =>
      this.passengerService.getPassengerData(currentPage)
    ),
    map((res: any) => res.data)
  );

  constructor(private passengerService: PassengerService) {}

  nextPage() {
    this.currentPage$.next(this.currentPage$.value + 1);
  }

  prevPage() {
    if (this.currentPage$.value > 1) {
      this.currentPage$.next(this.currentPage$.value - 1);
    }
  }
}
