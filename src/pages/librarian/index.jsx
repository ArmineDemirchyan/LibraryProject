import styles from "./librarian.module.css";
import React from "react";
import {Admin, Resource} from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import BooksList from './components/booksList';
const Librarian = () => {


    return(
        <Admin dataProvider={lb4Provider('http/localhost:3000/librarian')}>
            <Resource name='Ուսանողների ցանկ' list={BooksList}/>
            
        </Admin>
    )
    // return (
    //     <body>

    //         <div className={styles.sidenav}>
    //             <a href="#">Ինչպե՞ս օգտվել</a>
    //             <a href="#">Ուսանոցների ցանկ</a>
    //             <a href="#">Գրքերի ցանկ</a>
    //         </div>
    //         <div className={styles.navbar}>
    //         {/* <FontAwesomeIcon icon="fa-solid fa-right-from-bracket"/> */}
    //         </div>
    //         <div className={styles.main}>

    //         </div>

    //     </body>
    // )
}
export default Librarian;