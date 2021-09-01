import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { Rest } from "../model/Rest";
import { RestaurentServiceService } from "../restaurent-service.service";
import { GetRestFailed, GetRestSuccess, TasksActionType } from "./restaurent-list.action";


@Injectable()
export class tasksEffect {
  constructor(
    private actions$: Actions,
    private tasksService: RestaurentServiceService
  ) {}

   loadtasks = createEffect(() =>  {

    return this.actions$.pipe(
      ofType(TasksActionType.GET_REST),
      switchMap(() => this.tasksService.getAllRest().pipe(
          map((tasks : Array<Rest>) => new GetRestSuccess(tasks)),
          catchError( async (error) => new GetRestFailed('failed'))
      ))
      
      )
   }
      );
  // });
}
  