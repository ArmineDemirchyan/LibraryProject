import * as actionTypes from "../action-types/app";

const initialState = {
  showBooksBasketContainer: false,
  booksBasket: [],
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SHOW_BOOKS_BASKET_CONTAINER:
      return { ...state, showBooksBasketContainer: payload };
    case actionTypes.BOOKS_BASKET_LIST_CHANGE:
      return { ...state, booksBasket: payload };
    default:
      return { ...state };
  }
}
