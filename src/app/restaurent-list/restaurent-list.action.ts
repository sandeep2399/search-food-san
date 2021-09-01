import {Action} from '@ngrx/store';
import { Rest } from '../model/Rest';

//ACTION TYPES 
export enum TasksActionType{
    GET_REST = 'GET_REST',
    GET_REST_SUCCESS = 'GET_REST_SUCCESS',
    GET_REST_FAILED = 'GET_REST_FAILED'
}

//ACTION CREATOR -1 
export class GetRest implements Action {
  readonly type = TasksActionType.GET_REST;
}

//action creator -2
export class GetRestSuccess implements Action {
  readonly type = TasksActionType.GET_REST_SUCCESS;
  constructor(public payload: Array<Rest>){

  }
}

//action creator - 3
export class GetRestFailed implements Action {
  readonly type = TasksActionType.GET_REST_FAILED;
  constructor(public payload: string) {}
}

export type TaskActions = GetRest | GetRestSuccess | GetRestFailed;