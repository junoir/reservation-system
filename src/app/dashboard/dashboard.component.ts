import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
import { Room } from '../room';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rooms:  Room[];
  selectedRoom:  Room  = { id :  null , name: null, type: null, status: null};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getRooms().subscribe((room: Room[])=>{
      this.rooms = room;
      console.log(this.rooms);
    })
  }

  createOrUpdateRoom(form: { value: Room; }){
    if(this.selectedRoom && this.selectedRoom.id){
      form.value.id = this.selectedRoom.id;
      this.apiService.updateRoom(form.value).subscribe((room: Room)=>{
        console.log("room updated" , room);
      });
    }
    else{

      this.apiService.createRoom(form.value).subscribe((room: Room)=>{
        console.log("room created, ", room);
      });
    }

  }

  selectRoom(room: Room){
    this.selectedRoom = room;
  }

  deleteRoom(id: number){
    this.apiService.deleteRoom(id).subscribe((room: Room)=>{
      console.log("room deleted, ", room);
    });
  }

}