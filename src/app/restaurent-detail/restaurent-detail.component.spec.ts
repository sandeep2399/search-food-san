
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RestaurentServiceService } from "../restaurent-service.service";
import { RestaurentDetailComponent } from "./restaurent-detail.component";
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

it('Test if Restaurent detail is retrived',()=>{
  let fixture= TestBed.createComponent(RestaurentDetailComponent);
let appObj=fixture.debugElement.componentInstance;
let restService=fixture.debugElement.injector.get(RestaurentServiceService);
//expect(restService.getRestByName('Noida')).toEqual(appObj.re);
})

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
