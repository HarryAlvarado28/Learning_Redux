import { Usuario } from './../../models/usuario.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { cargarUsuario } from '../../store/actions';
import { AppState } from './../../store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  usuario!: Usuario;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({ user, loaded, loading }) => {
      console.log(user);
      this.usuario = user;
    });
    this.activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
}
