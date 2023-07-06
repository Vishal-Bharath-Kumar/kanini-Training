import { Component, OnInit } from '@angular/core';
import { ILand } from 'src/app/Service/Models/Land';
import { LandService } from 'src/app/Service/land.service';

@Component({
  selector: 'app-landride',
  templateUrl: './landride.component.html',
  styleUrls: ['./landride.component.css']
})
export class LandrideComponent  implements OnInit {

  constructor(private landservice:LandService){}
  landRides?:any;
  id:any;
  
 
  
    ngOnInit(): void {
      this.landservice.getLand().subscribe(data=>this.landRides=data)
    }
   
    rides:ILand={
    
      landrideId: 0,
      landrideName: " ",
      rideStatus: " ",
      rideImage: " "
    
   }
}
