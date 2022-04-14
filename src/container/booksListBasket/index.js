import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { isEmpty } from "lodash";
import React from "react";
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
                            <div>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <DateTimePicker
                                  renderInput={(props) => (
                                    <TextField {...props} />
                                  )}
                                  label="DateTimePicker"
                                  // value={value}
                                  // onChange={(newValue) => {
                                  //   setValue(newValue);
                                  // }}
                                />
                              </LocalizationProvider>
                            </div>
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
