import { Button, Card, CardActionArea, CardContent } from "@mui/material";
import Loading from "components/loading";
import UserController from "controllers/user";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import routes from "routes/routes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { toast } from "react-toastify";
import { userPersonalInfoSelector } from "store/selectors/userInfo";
import { useSelector } from "react-redux";
import useNavigationWithQueryParams from "helpers/hooks/useNavigationWithQueryParams";

export default function MyBooks() {
  const [loading, setLoading] = useState(false);
  const [myBooks, setMyBooks] = useState([]);
  useEffect(() => {
    getMyBooks();
  }, []);
  const getMyBooks = async () => {
    setLoading(true);
    await UserController.getMyBookReservations()
      .then((res) => setMyBooks(res.data))
      .finally(() => setLoading(false));
  };

  const handleCancelReservation = (id) => async (e) => {
    setLoading(true);
    e.stopPropagation();
    await UserController.CancelBookReservation(id);
    await getMyBooks();
    setLoading(false);
  };
  // const User = () => {
  //   const [loading, setLoading] = useState(false);
  //   const { displayName } = useSelector(userPersonalInfoSelector);
  //   const navigate = useNavigationWithQueryParams();
  //   const handleLogOut = async () => {
  //     setLoading(true);
  //     const res = await UserController.logOut();
  //     if (res.hasError) return toast.error(res.errorMessage);
  //     navigate(routes.home);
  //   };
    
  return (
    <>
      {loading && <Loading />}
      <div className="my-books-container-wrapper">  
          <nav>   
           <h1> ԻՄ ԳՐՔԵՐԸ</h1>
           <Link to={routes.user}>ՀԻՄՆԱԿԱՆ ԷՋ</Link>
            <Link to={routes.bookList}>ԳՐՔԵՐԻ ՑԱՆԿ</Link>
            {/* <Box sx={{ minWidth: "10rem" }}>
              <FormControl fullWidth>
                <InputLabel>{displayName}</InputLabel>
                <Select variant="standard">
                  <MenuItem onClick={handleLogOut} className="menuitem">
                    դուրս գալ
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>     */}
          </nav>
        <div className="my-books-container-inner-wrapper">
          {myBooks.map(({ book, bookName, bookAuthor, status, id }) => {
            return book ? (
              <Card sx={{ width: "25rem" }} key={book?.bookId}>
                <CardActionArea>
                  <CardContent>
                    <img
                      className="book-item-header-image"
                      alt=""
                      src="https://yazidharoun.files.wordpress.com/2020/11/how-to-format-a-book-3.jpg"
                    />
                    <div className="bookList-book-card-cardContent-wrapper">
                      <h4>Գրքի անուն: {book?.name}</h4>
                      <h5>Գրքի հեղինակ: {book?.author}</h5>
                      <p>Գրքի մեկնաբանություն: {book?.description}</p>
                      <p>կարգավիճակ։ {status}</p>
                    </div>

                    {status === "Reserved" && (
                      <div className="card-footer-button">
                        <Button onClick={handleCancelReservation(id)}>
                          Չեղարկել
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            ) : (
              <Card sx={{ width: "25rem" }} key={book?.bookId}>
                <CardActionArea>
                  <CardContent>
                    <img
                      className="book-item-header-image"
                      alt=""
                      src="https://yazidharoun.files.wordpress.com/2020/11/how-to-format-a-book-3.jpg"
                    />
                    <div className="bookList-book-card-cardContent-wrapper">
                      <h4>Գրքի անուն: {bookName}</h4>
                      <h5>Գրքի հեղինակ: {bookAuthor}</h5>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

