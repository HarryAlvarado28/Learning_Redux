import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtros/filtros.actions';
import { filtroReducer } from './filtros/filtros.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';

export interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};
