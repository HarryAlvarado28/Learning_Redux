import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as usuarioActions from './../actions';
import { UsuarioService } from './../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuarioActions.cargarUsuario),
      tap((data) => console.log('effect tap ', data)),
      mergeMap((action) =>
        this.usuarioService.getUsersById(action.id).pipe(
          tap((usuarios) => console.log('getUsers tap ', usuarios)),
          map((usuario) => usuarioActions.cargarUsuarioSuccess({ usuario })),
          catchError((err) =>
            of(usuarioActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    )
  );
}
