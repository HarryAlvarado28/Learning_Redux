import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtros.actions';

export const initialState: filtrosValidos = 'todos' as filtrosValidos;

export const filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);
