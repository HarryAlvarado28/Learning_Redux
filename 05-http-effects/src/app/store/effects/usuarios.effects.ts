import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import * as usuariosActions from './../actions/usuarios.actions';
import { UsuarioService } from './../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  cargarUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      tap((data) => console.log('effect tap ', data)),
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          tap((usuarios) => console.log('getUsers tap ', usuarios)),
          map((usuarios) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios })
          ),
          catchError((err) =>
            of(usuariosActions.cargarUsuariosError({ payload: err }))
          )
        )
      )
    )
  );
}
