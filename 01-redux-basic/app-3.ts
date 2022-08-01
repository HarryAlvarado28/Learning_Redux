import {
  dividirAction,
  incrementadorAction,
  multiplicarAction,
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reduce";
import { Action, Reducer } from "./ngrx-fake/ngrx";

class Store<T> {
  //   private state: T;
  constructor(private reducer: Reducer<T>, private state: T) {
    // this.state = state;
  }

  getState() {
    return this.state;
  }

  dispatch(action: Action) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(contadorReducer, 5);

console.log("Inicial: ", store.getState());
store.dispatch(incrementadorAction);
console.log(store.getState());
store.dispatch(multiplicarAction);
console.log(store.getState());
store.dispatch(multiplicarAction);
console.log(store.getState());
store.dispatch(dividirAction);
console.log("Ultimo: ", store.getState());
