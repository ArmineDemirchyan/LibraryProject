import * as actionTypes from "../action-types/app";

const initialState = {
  queryParams: null,
  translations: null,
  showSteps: false,
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_QUERYPARAMS:
      return { ...state, queryParams: payload };
    case actionTypes.SET_TRANSLATIONS:
      return { ...state, translations: payload };
    case actionTypes.CHANGE_STEPS_VISIBILITY:
      return { ...state, showSteps: payload };
    default:
      return { ...state };
  }
}
