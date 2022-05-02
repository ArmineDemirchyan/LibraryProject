import Loading from "components/loading";
import UserSelect from "components/userSelect";
import User from "pages/user";
import React, { useState } from "react";

const UserNavbar = () => {
    const [loading, setLoading] = useState(false); 
    return (
        <nav>
            <a href="#header">ԵԻՊՔ ԳՐԱԴԱՐԱՆ</a>
            <a href="#about">ԻՆՉՊԵ՞Ս ՕԳՏՎԵԼ</a>
            <Link to={routes.bookList}>ԳՐՔԵՐԻ ՑԱՆԿ</Link>
            <Link to={routes.myBooks}>ԻՄ ԳՐՔԵՐԸ</Link>
            <UserSelect setLoading={setLoading} />
        </nav>
    )
}
export default UserNavbar;