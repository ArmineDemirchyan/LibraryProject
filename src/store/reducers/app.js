import * as actionTypes from "../action-types/app";

const initialState = {
  showBooksBasketContainer: false,
  booksBasket: [],
  bookList: [],
  users: [],
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SHOW_BOOKS_BASKET_CONTAINER:
      return { ...state, showBooksBasketContainer: payload };
    case actionTypes.BOOKS_BASKET_LIST_CHANGE:
      return { ...state, booksBasket: payload };
    case actionTypes.SET_BOOKS_LIST:
      return { ...state, bookList: payload };
    case actionTypes.SAVE_USERS_LIST:
      return { ...state, users: payload };
    default:
      return { ...state };
  }
}
