import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { bookListSelector } from "store/selectors/app";
import { Box, color, positions } from "@mui/system";
import UserController from "controllers/user";
import "./style.scss";
import { cyan } from "@mui/material/colors";
import { CenterFocusStrong } from "@mui/icons-material";

export default function BookListFilters({ setBookList }) {
  const [booksCategoriesData, setBooksCategoriesData] = useState({
    data: [],
  });
  const bookList = useSelector(bookListSelector);
  const handleSearch = (filterField) => (e) => {
    setBookList(
      bookList.filter((elem) =>
        elem[filterField].toUpperCase().includes(e.target.value.toUpperCase())
      )
    );
  };
  const getBookCategoriesList = async () => {
    const response = await UserController.getBookCategories();
    return response;
  };

  const handleSearchByCategory = (e) => {
    setBookList(bookList.filter((elem) => elem.category.id === e.target.value));
  };

  useEffect(() => {
    getBookCategoriesList().then((res) =>
      setBooksCategoriesData({ ...booksCategoriesData, data: res })
    );
  }, []);
  return (
    <div className="bookList-filters">
      <TextField
      sx={{ minWidth: 300, 
            
            boxShadow: 1,
            borderRadius: 2,
          }}
        type="search"
        onChange={handleSearch("name")}
        placeholder="Փնտրել Գրքի Անունով"
      />
      <TextField
      sx={{ minWidth: 300 }}
        type="search"
        onChange={handleSearch("author")}
        placeholder="Փնտրել Գրքի Հեղինակով"
      />
      <Box sx={{ minWidth: 300 }}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-label" >
            Փնտրել Գրքի Կատեգորիայով
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={handleSearchByCategory}
            label="Age"
          >
            {booksCategoriesData.data?.map((elem) => (
              <MenuItem value={elem.id}>{elem.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

BookListFilters.propTypes = {
  bookList: PropTypes.arrayOf(PropTypes.object),
  setBookList: PropTypes.func,
};
