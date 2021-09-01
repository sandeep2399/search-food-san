import { Component, OnInit } from '@angular/core';
import { Rest } from '../model/Rest';
import { RestaurentServiceService } from '../restaurent-service.service';
import {Store} from '@ngrx/store';
import * as restListActions from './restaurent-list.action'

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
    private restaurentService : RestaurentServiceService ,
    private store: Store<any>
) {
  this.restList=[];
}

ngOnInit(){
//use service call
  this.getAllRest();

  //use ngrx
  // this.store.dispatch(new restListActions.GetRest);

  // this.store.select('restList').subscribe(response => {
  //       this.restList = response;
  // this.allRestList=response;
  // });

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
