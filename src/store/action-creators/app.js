import * as actionTypes from "../action-types/app";

export const showBooksBasketContainer = (payload) => ({
  type: actionTypes.SHOW_BOOKS_BASKET_CONTAINER,
  payload,
});

export const BooksBasketListChange = (payload) => ({
  type: actionTypes.BOOKS_BASKET_LIST_CHANGE,
  payload,
});
