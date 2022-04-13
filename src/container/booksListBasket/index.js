import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  BooksBasketListChange,
  showBooksBasketContainer,
} from "store/action-creators/app";
import {
  booksBasketSelector,
  showBooksBasketContainerSelector,
} from "store/selectors/app";
// import scss
import "./index.scss";
import BookList from "pages/bookList";
import { isEmpty } from "lodash";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  minHeight: "5rem",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BooksListBasket() {
  const showBasketContainer = useSelector(
    showBooksBasketContainerSelector,
    shallowEqual
  );
  const booksList = useSelector(booksBasketSelector, shallowEqual);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(showBooksBasketContainer(false));
  };

  const handleDeleteBookFromBasket = (bookId) => () => {
    const newBookList = booksList.filter((elem) => elem.bookId !== bookId);
    dispatch(BooksBasketListChange(newBookList));
  };

  return (
    <Modal onClose={handleCloseModal} open={showBasketContainer}>
      <Box sx={style}>
        <div className="modal-container">
          <div className="modal-header">
            <h3>Ամրագրումների ցուցակ</h3>
          </div>
          {!isEmpty(booksList) && (
            <>
              <div className="booksList-wrapper">
                {booksList.map(
                  ({ bookId, image, name, author, description }, index) => (
                    <Card sx={{ maxWidth: 300 }} key={bookId}>
                      <CardActionArea>
                        {image && (
                          <CardMedia
                            component="img"
                            height="140"
                            image={image}
                            alt="Book"
                          />
                        )}
                        <CardContent>
                          <div className="bookList-book-card-cardContent-wrapper">
                            <h4>Գրքի անուն: {name}</h4>
                            <h5>Գրքի հեղինակ: {author}</h5>
                            <p>Գրքի մեկնաբանություն: {description}</p>
                            <div className="buttons-container">
                              <Button
                                variant="outlined"
                                onClick={handleDeleteBookFromBasket(bookId)}
                              >
                                Ջնջել ամրագրումների ցուցակից
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  )
                )}
              </div>
              <div className="modal-submitButton-wrapper">
                <Button variant="contained">Ամրագրել</Button>
              </div>
            </>
          )}
        </div>
      </Box>
    </Modal>
  );
}
