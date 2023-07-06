import { Component, Input, OnInit } from '@angular/core';
import { ILand } from 'src/app/Service/Models/Land';
import { LandService } from 'src/app/Service/land.service';

@Component({
  selector: 'app-update-land-ride',
  templateUrl: './update-land-ride.component.html',
  styleUrls: ['./update-land-ride.component.css']
})
export class UpdateLandRideComponent implements OnInit {

  constructor(private ride:LandService) { }
  @Input() data?: any;
  ngOnInit(): void {
    this.ride.getTrainerByID(this.data).subscribe((data: any) => {
      this.rid = data;
      this.rides.landrideId = this.rid?.landrideId;
    });
  }
  rid?:ILand;
 rides:ILand={
  
    landrideId: 0,
    landrideName: " ",
    rideStatus: " ",
    rideImage: " "
  
 }
 

 updateTrainer(id:any)
  {
    // console.log(this.data);
    this.ride.updateidDetails(id,this.rides).subscribe(res =>
      
      console.log(res));
    alert("Ride Details updated successfully!!! ");
    
      window.location.reload();
    
  }
}

