import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import User from './pages/user';
import SuperAdmin from './pages/superadmin';
import Librarian from './pages/librarian';
import Start from './pages/start';
import {Login} from "./pages/login/signin/signin";
import { Register } from './pages/login/register/register';
import { BookList } from './pages/user/booklist';

const list =[
  {id:1,name:"Jak",Age:25},
  {id:2,name:"Jak",Age:25},
  {id:3,name:"Jak",Age:25},
]
const colNames=['Id', 'Name', 'Age']

function App() {
  return (
    <div id="main">
      
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/user' element={<User />} />
        <Route path='/superadmin' element={<SuperAdmin />} />
        <Route path='/librarian' element={<Librarian />} />
        <Route path='/start' element={<Start/>} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/books' element={<BookList/>}/>
      </Routes>
    </div>
  );
}

export default App;
