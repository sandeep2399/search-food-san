import {TaskActions, TasksActionType} from './restaurent-list.action'

export const initialState = {
   tasksList: [],
   message: '',
   loading: false,
   bgClass: ''
} ;

export function tasksReducer(state = initialState, action: TaskActions) {
  switch (action.type) {
    case TasksActionType.GET_REST: {
        return {
            ...state,
            loading: true
        }
    }
    case TasksActionType.GET_REST_SUCCESS:{
        return{
            ...state,
            tasksList: action.payload
        }
        
    }
    case TasksActionType.GET_REST_FAILED:{ 
            return { ...state };    
    }
  }
}