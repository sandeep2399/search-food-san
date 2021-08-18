import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rest } from '../model/Rest';
import { RestaurentServiceService } from '../restaurent-service.service';

@Component({
  selector: 'app-restaurent-detail',
  templateUrl: './restaurent-detail.component.html',
  styleUrls: ['./restaurent-detail.component.css']
})
export class RestaurentDetailComponent implements OnInit {

  rest:Rest;
   name:string="";
   allRestList :Rest[]=[];
   
   constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router,
               private restaurentService : RestaurentServiceService 
               ){
                this._Activatedroute.paramMap.subscribe(
                  params  => {this.name = params.get('name') || "";})
       }

   ngOnInit() {
    //sub;
    //this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.restaurentService.getAllRest().subscribe(data => {
        this.allRestList=data;
          this.rest=this.allRestList.filter((p) => {return p.name==this.name})[0];  
        });
         
    //});
  }
onBack(): void {
    this._router.navigate(['restaurent-list']);
 }
}
