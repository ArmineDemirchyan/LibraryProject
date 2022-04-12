import axios from 'axios';
import React from 'react';
import { BASE_URL } from "../../constants";

export default function UserBook() {
  const [card,setCard] = React.useState('');

  React.useEffect (() => {
    
    axios.get(`${BASE_URL}/${END_POINTS.books}`).then((response) => {
      setCard(response.data);
    });
  }, []);

  state = {
    persons: []
  }

}