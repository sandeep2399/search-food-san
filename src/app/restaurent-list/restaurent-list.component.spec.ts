import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RestaurentListComponent } from "../restaurent-list/restaurent-list.component";
import { RestaurentServiceService } from "../restaurent-service.service";
import { StoreModule } from "@ngrx/store";
describe('',()=>{
beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientTestingModule, StoreModule.forRoot({})],
    declarations:[RestaurentListComponent]
   
  })
})
//arrange, action, assert 
it('Test if Restaurent conponent instance is created',()=>{
  let fixture= TestBed.createComponent(RestaurentListComponent);
let appObj=fixture.debugElement.componentInstance;

expect(appObj).toBeTruthy();
})

it('Test if Restaurent list is returned',()=>{
  let fixture= TestBed.createComponent(RestaurentListComponent);
let appObj=fixture.debugElement.componentInstance;
let restService=fixture.debugElement.injector.get(RestaurentServiceService);
expect(restService.getAllRest()).toBeGreaterThanOrEqual(50);
})

})