import { Component, OnInit } from '@angular/core';
import { ILand } from 'src/app/Service/Models/Land';
import { LandService } from 'src/app/Service/land.service';

@Component({
  selector: 'app-admin-land-ride',
  templateUrl: './admin-land-ride.component.html',
  styleUrls: ['./admin-land-ride.component.css']
})
export class AdminLandRideComponent implements OnInit {

constructor(private landservice:LandService){}
landRides?:any;
id:any;

selectedrideId?:number;

  ngOnInit(): void {
    this.landservice.getLand().subscribe(data=>this.landRides=data)
  }
  passId(rideid:any){
    this.id=rideid;

  }
  rides:ILand={
  
    landrideId: 0,
    landrideName: " ",
    rideStatus: " ",
    rideImage: " "
  
 }
 

 updateTrainer(id:any)
  {
    // console.log(this.data);
    this.landservice.updateidDetails(id,this.rides).subscribe(res =>
      
      console.log(res));
    alert("Ride Details updated successfully!!! ");
    
      window.location.reload();
    
  }

  deletetrainer(id:any){
    this.landservice.deleteRide(id).subscribe(
      ()=>{
        alert("Deleted Successfully!!!")
        window.location.reload();
      //   confirm("ride deleted successfully")
      //   {
      //     window.location.reload();
      //   }
      // },
      // (      error: any)=>{
      //   console.error(error);
      //   alert("an error occurred while deleting ride")
      }
      
      
      
    );
  }
}
