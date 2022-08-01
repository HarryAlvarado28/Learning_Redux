import { Store, createStore } from "redux";
import {
  dividirAction,
  incrementadorAction,
  multiplicarAction,
} from "./contador/contador.actions";
import { contadorReducer } from "./contador/contador.reduce";

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log("Subs: ", store.getState());
});

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(incrementadorAction);
store.dispatch(multiplicarAction);
store.dispatch(dividirAction);
store.dispatch(multiplicarAction);
store.dispatch(incrementadorAction);
store.dispatch(dividirAction);
store.dispatch(incrementadorAction);
store.dispatch(dividirAction);
