import {
  incrementadorAction,
  decrementadorAction,
  multiplicarAction,
  dividirAction,
  residuoAction,
  resetAction,
} from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: Action) {
  switch (action.type) {
    case "INCREMENTAR":
      return (state += 1);
    case "DECREMENTAR":
      return (state -= 1);
    case "MULTIPLICAR":
      return (state *= action.payload);
    case "DIVIDIR":
      return (state /= action.payload);
    case "RESIDUO":
      return (state %= action.payload);
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
}

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(10, multiplicarAction));
console.log(reducer(10, dividirAction));
console.log(reducer(10, residuoAction));
console.log(reducer(10, resetAction));
