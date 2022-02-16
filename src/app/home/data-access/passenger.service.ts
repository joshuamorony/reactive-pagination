import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  getPassengerData(page: number) {
    return this.http.get(
      `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
    );
  }
}
