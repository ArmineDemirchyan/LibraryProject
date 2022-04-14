import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
} from "@mui/material";
import BookListFilters from "componets/bookListFilters";
import BooksListBasket from "container/booksListBasket";
import UserController from "controllers/user";
import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  BooksBasketListChange,
  showBooksBasketContainer,
} from "store/action-creators/app";
import { booksBasketSelector } from "store/selectors/app";
//import scss
import "./index.scss";

export default function BookList() {
  const booksBasket = useSelector(booksBasketSelector, shallowEqual);
  const dispatch = useDispatch();
  const [bookList, setBookList] = useState([]);
  const getBookList = async () => {
    return await UserController.getBookList();
  };
  const handleAddToCard = (books) => () => {
    dispatch(BooksBasketListChange([books, ...booksBasket]));
  };

  const handleOpenBasket = () => {
    dispatch(showBooksBasketContainer(true));
  };

  const handleDeleteFromBasket = (bookId) => () => {
    const newBookList = booksBasket.filter((elem) => elem.bookId !== bookId);
    dispatch(BooksBasketListChange(newBookList));
  };

  useEffect(() => {
    getBookList().then((res) => {
      setBookList(res.data.data);
    });
  }, []);
  return (
    <>
      <BooksListBasket />
      <div className="booksList-container-wrapper">
        <div className="header-wrapper">
          <div className="header">
            <div>
              <Link className="header-logo" to="/user">
                ԵԻՊՔ ԳՐԱԴԱՐԱՆ
              </Link>
            </div>
            <div></div>
            <div>
              <IconButton onClick={handleOpenBasket}>
                <LocalGroceryStoreIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="books-wrapper">
          <div className="bookList-filters-wrapper">
            <BookListFilters bookList={bookList} setBookList={setBookList} />
          </div>
          <div className="books-list">
            {bookList.map((book) => {
              const { bookId, name, author, description } = book;
              return (
                <Card sx={{ width: "25rem" }} key={bookId}>
                  <CardActionArea>
                    <CardContent>
                      <div className="bookList-book-card-cardContent-wrapper">
                        <h4>Գրքի անուն: {name}</h4>
                        <h5>Գրքի հեղինակ: {author}</h5>
                        <p>Գրքի մեկնաբանություն: {description}</p>
                        <div className="buttons-container">
                          {booksBasket.some(
                            (elem) => elem.bookId === bookId
                          ) ? (
                            <Button
                              variant="outlined"
                              onClick={handleDeleteFromBasket(bookId)}
                            >
                              Ջնջել ամրագրումների ցուցակից
                            </Button>
                          ) : (
                            <Button
                              variant="outlined"
                              onClick={handleAddToCard(book)}
                            >
                              Ավելացնել ամրագրումների ցուցակում
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
