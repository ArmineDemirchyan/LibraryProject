import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import UserController from "controllers/user";
import React, { useEffect, useState } from "react";

//import scss
import "./index.scss";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const getBookList = async () => {
    return await UserController.getBookList();
  };
  const handleAddToCard = (bookId) => () => {
    
  };

  useEffect(() => {
    getBookList().then((res) => setBookList(res.data.data));
  }, []);
  console.log(bookList);
  return (
    <div className="books-wrapper">
      {bookList.map(
        (
          { bookId, image, name, author, description } //hishacnel Rafoin Vor Image Avelacni
        ) => (
          <Card sx={{ maxWidth: 400 }} key={bookId}>
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
                      onClick={handleAddToCard(bookId)}
                    >
                      Ավելացնել ամրագրումների ցուցակում
                    </Button>
                  </div>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      )}
    </div>
  );
}
