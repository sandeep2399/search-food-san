
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RestaurentServiceService } from "../restaurent-service.service";
import { RestaurentDetailComponent } from "./restaurent-detail.component";
import { promises } from "dns";
import { exception } from "console";
import { Observable, observable } from "rxjs";
describe('',()=>{
beforeEach(()=>{
  TestBed.configureTestingModule({
    imports:[RouterTestingModule,HttpClientTestingModule],
    declarations:[RestaurentDetailComponent]
  })
})
//arrange, action, assert 
it('Test if Restaurent detail instance is created',()=>{
  let fixture= TestBed.createComponent(RestaurentDetailComponent);
let appObj=fixture.debugElement.componentInstance;

expect(appObj).toBeTruthy();
})

it('Test if Restaurent detail is retrived from service',()=>{
  let fixture= TestBed.createComponent(RestaurentDetailComponent);
let appObj=fixture.debugElement.componentInstance;
let restService=fixture.debugElement.injector.get(RestaurentServiceService);
fixture.detectChanges();

expect(restService.getRestByName('Noida')).toEqual(appObj.name);
})


it('Test if Restaurent detail is retrived from service and shown on html',()=>{
  let fixture= TestBed.createComponent(RestaurentDetailComponent);
let appObj=fixture.debugElement.componentInstance;
let restService=fixture.debugElement.injector.get(RestaurentServiceService);
fixture.detectChanges();
let element=fixture.debugElement.nativeElement;
expect(element.querySelector('p').textContent).toEqual(appObj.name);
})

})

it('Test if Restaurent detail is retrived',()=>{
  let fixture= TestBed.createComponent(RestaurentDetailComponent);
let appObj=fixture.debugElement.componentInstance;
let restService=fixture.debugElement.injector.get(RestaurentServiceService);
let spy=spyOn(restService, 'getDetailsForTest').and.returnValue(Promise.resolve('Data')); //how will for for observable
fixture.detectChanges();
expect(appObj.data).toBe(undefined);
})

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { RestaurentDetailComponent } from './restaurent-detail.component';

// describe('RestaurentDetailComponent', () => {
//   let component: RestaurentDetailComponent;
//   let fixture: ComponentFixture<RestaurentDetailComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ RestaurentDetailComponent ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RestaurentDetailComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
