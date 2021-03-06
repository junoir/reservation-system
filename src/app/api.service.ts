import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Room } from  './room';
import { Reservations } from './reservation';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ROOMS_API_SERVER = "http://127.0.0.1/backend";

  constructor(private httpClient: HttpClient) {}

  // get all rooms
  getRooms(): Observable<Room[]>{
    return this.httpClient.get<Room[]>(`${this.ROOMS_API_SERVER}/api/read.php`);
  }

  // create a room
  createRoom(room: Room): Observable<Room>{
    return this.httpClient.post<Room>(`${this.ROOMS_API_SERVER}/api/create.php`, room);
  }

  // update a room
  updateRoom(room: Room){
    return this.httpClient.put<Room>(`${this.ROOMS_API_SERVER}/api/update.php`, room);   
  }

  // delete a room
  deleteRoom(id: number){
    return this.httpClient.delete<Room>(`${this.ROOMS_API_SERVER}/api/delete.php/?id=${id}`);
  }

  /*
  * endpoints for reservations
  */

  // get all rooms
  getReservations(): Observable<Reservations[]>{
    return this.httpClient.get<Reservations[]>(`${this.ROOMS_API_SERVER}/api/read.php`);
  }


  // create a reservation
  createReservation(reservations: Reservations): Observable<Reservations>{
    return this.httpClient.post<Reservations>(`${this.ROOMS_API_SERVER}/api/create.php`, reservations);
  }

  // update a reservation
  updateReservation(reservations: Reservations): Observable<Reservations>{
    return this.httpClient.post<Reservations>(`${this.ROOMS_API_SERVER}/api/create.php`, reservations);
  }

  deleteReservation(id: number){
    return this.httpClient.delete<Reservations>(`${this.ROOMS_API_SERVER}/api/delete.php/?id=${id}`);
  }

}