import { Action } from "../ngrx-fake/ngrx";

// Usar el reducer
export const incrementadorAction: Action = {
  type: "INCREMENTAR",
};

export const decrementadorAction: Action = {
  type: "DECREMENTAR",
};

export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 5,
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 5,
};

export const residuoAction: Action = {
  type: "RESIDUO",
  payload: 7,
};
export const resetAction: Action = {
  type: "RESET",
  payload: 7,
};
