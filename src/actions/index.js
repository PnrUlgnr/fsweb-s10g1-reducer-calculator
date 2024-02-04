export const ADD_ONE = "ADD_ONE";

export const CE = "CE";

export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_RECORD = "MEMORY_RECORD";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_RECALL = "MEMORY_RECALL ";
// src/actions/types.js
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const CHANGE_OPERATION_v2 = "CHANGE_OPERATION_v2";
export const TYPE_ON_SCREEN = "TYPE_ON_SCREEN";
export const EQUALS = "EQUALS";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};
export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};
export const changeOperation = (operation) => {
  return {
    type: CHANGE_OPERATION,
    payload: operation,
  };
};
export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
export const memoryAdd = () => {
  return { type: ADD_ONE };
};
export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};
