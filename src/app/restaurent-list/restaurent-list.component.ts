import { Component, OnInit } from '@angular/core';
import { Rest } from '../model/Rest';
import { RestaurentServiceService } from '../restaurent-service.service';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit {
  allRestList :Rest[]=[];
  restList :Rest[]=[];
 
  options: string[] = ["All","Noida", "Delhi", "Gurugram","Goa","Mumbai"];
  selectedCity:string ="All";
  

  constructor(
    private restaurentService : RestaurentServiceService 
) {
  this.restList=[];
}

ngOnInit(){
  this.getAllRest();
}
 
getAllRest(){
  this.restaurentService.getAllRest().subscribe(data => {
    this.restList=data;
    this.allRestList=data;
       console.log(data);
   });
}

  changeCity(e:any) {  
  
    if(this.selectedCity=="All")
    this.restList=this.allRestList;
  else
    this.restList=  this.allRestList.filter((restitem)=>{
     return restitem.city == this.selectedCity;
    })
    console.log(e.target.value);  
  }  

}
