import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from './../../store/actions/usuarios.actions';
import { Usuario } from './../../models/usuario.models';
import { AppState } from '../../store/app.reducers';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  // constructor(private usuarioService: UsuarioService) {}
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(
      ({ users, loading, error }) => {
        console.log(users);
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      },
      // (err) => console.log(err)
    );
    this.store.dispatch(cargarUsuarios());
    // this.usuarioService.getUsers().subscribe((resp) => {
    //   console.log(resp);
    //   this.usuarios = resp;
    //   console.log(this.usuarios);
    // });
  }
}
