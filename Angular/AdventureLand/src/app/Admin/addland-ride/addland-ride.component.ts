import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILand } from 'src/app/Service/Models/Land';
import { LandService } from 'src/app/Service/land.service';


@Component({
  selector: 'app-addland-ride',
  templateUrl: './addland-ride.component.html',
  styleUrls: ['./addland-ride.component.css']
})
export class AddlandRideComponent  {
  constructor(private land:LandService,private router: Router) { }
  addland:ILand={
    landrideId: 0,
    landrideName: " ",
    rideStatus: " ",
    rideImage: " "
  }
  
 
   addtrainer()
   {
     this.land.addrideDetails(this.addland).subscribe(addland => console.log(addland));
     this.router.navigate(['/adminland'], { skipLocationChange: true }).then(() => {
       window.location.reload();
     });
     alert("New Ride added successfully!!! ")
   }
}
