import React from 'react';
import { useState } from "react";
import styles from "./register.module.css";
import { USER_TYPES } from "../../../helpers/constants";
import identityService from '../../../service/identityService';
import axios from 'axios';

export function Register() {
    const [userType, setUserType] = useState(USER_TYPES.STUDENT);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [studentCardNumber, setStudentCardNumber] = useState('');
    const [groupNumber, setGroupNumber] = useState('default');
    const [passportNumber, setPassportNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    // const [registeredData, setRegisteredData] = useState({ name: '', lastname: '' });


    //patkeracrir che ?motavor- ) nayi es mi registeredDAtan karair amen angamupdate aneir, vor esqan state chpaheir, vortev esqan angam qo componenty renderea linelu vory shat kopit sxal a eli, bayc voch qo paragayum )
    ///es inchqan state es pahel)
    //stex karair senc aneir

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };
    const handleLastnameChange = (event) => {
        const value = event.target.value;
        setLastname(value);
    };
    const handleGroupNumberChange = (event) => {
        event.preventDefault();
        setGroupNumber(event.target.value);
    };
    const handleStudentCardNumberChange = (event) => {
        const value = event.target.value;
        setStudentCardNumber(value);
    };
    const handlePassportNumberChange = (event) => {
        const value = event.target.value;
        setPassportNumber(value);
    };
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleConfirmPasswordChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
    };
    const hadlePhoneChange = (event) => {
        const value = event.target.value;
        setPhone(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, lastname, passportNumber, email, confirmPassword, phone);

        var cors = require('cors')
        const corsOptions = {
            origin: 'http://localhost:3000',
            credentials: true,            //access-control-allow-credentials:true
            optionSuccessStatus: 200
        }

        axios.post('http://138.68.129.12/api/register', {
            email: email,
            password: password,
            firstName: name,
            lastName: lastname,
            phoneNumber: phone,
            groupNumber: groupNumber,
            studentCardNumber: studentCardNumber
        })
            .then(function (response) {
                console.log(response);
            })

        // const response = identityService.register(
        //     {
        //         email: email,
        //         password: password,
        //         firstName: name,
        //         lastName: lastname,
        //         phoneNumber: phone,
        //         groupNumber: groupNumber,
        //         studentCardNumber: studentCardNumber
        //     }
        // );
    };
    return <div className={styles.base_container} >
        <form onSubmit={handleSubmit} >
            <div className={styles.header}>Գրանցում</div>
            <div className={styles.changeform}>
                <button className={styles.button} disabled={userType === USER_TYPES.STUDENT} type="button" onClick={() => setUserType(USER_TYPES.STUDENT)}>Ուսանող</button>
                <button className={styles.button} disabled={userType === USER_TYPES.TEACHER} type="button" onClick={() => setUserType(USER_TYPES.TEACHER)}>Դասախոս</button>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <img src='https://www.cdc.gov/healthyyouth/classroom-management/images/teacher-expectations.jpg' />
                </div>
                <div className={styles.from}>
                    <div className={styles.flex}>
                        <div className={styles.formgroup}>
                            <label className={styles.label} htmlFor="name">Անուն</label>
                            <input className={styles.input} value={name} onChange={handleNameChange} type="text" name="username" />
                        </div>
                        <div className={styles.formgroup}>
                            <label className={styles.label} htmlFor="lastname">Ազգանուն</label>
                            <input className={styles.input} value={lastname} onChange={handleLastnameChange} type="text" name="username" />
                        </div>
                    </div>
                    {
                        userType === USER_TYPES.STUDENT && (
                            <div className={styles.formgroup}>
                                <label className={styles.selectlabel} htmlFor="groupNumber">Խմբի համար</label>
                                <select value={groupNumber} onChange={handleGroupNumberChange} className={styles.select} name="groupNumber" >
                                    <option disabled="disabled" selected="selected" value='default'>--Ընտրի՛ր խմբիդ համարը</option>
                                    <option value='811'>811</option>
                                    <option value='115'>115</option>
                                    <option value='012'>012</option>
                                    <option value='323'>323</option>
                                </select>
                                {/* <div className={styles.selectlabel}>
                            <label className={styles.cryear}>ԸնդունմանՏարի</label>
                            <label className={styles.prof}>Մասնագիտություն</label>
                        </div> */}
                            </div>
                        )

                    }

                    <div className={styles.flex}>
                        {
                            userType === USER_TYPES.STUDENT ? (
                                <div className={styles.formgroup}>
                                    <label className={styles.label} htmlFor="studentCardNumber">Ուսանողական տոմսի համար</label>
                                    <input className={styles.input} value={studentCardNumber} onChange={handleStudentCardNumberChange} type="text" name="username" placeholder="Օրինակ`  Դ-128" />
                                </div>
                            ) : <div className={styles.formgroup}>
                                <label className={styles.label}>Անձնագրի համար</label>
                                <input className={styles.input} value={passportNumber} onChange={handlePassportNumberChange} type="text" name="username" placeholder="Օրինակ Դ-128" />
                            </div>
                        }

                        <div className={styles.formgroup}>
                            <label className={styles.label} htmlFor="email">Էլ․հասցե</label>
                            <input className={styles.input} value={email} onChange={handleEmailChange} type="email" name="username" placeholder="example@gmail.com" />
                        </div>
                    </div>
                    <div className={styles.flex}>
                        <div className={styles.formgroup}>
                            <label className={styles.label} htmlFor="password">Գաղտնաբառ</label>
                            <input className={styles.input} value={password} onChange={handlePasswordChange} type="password" name="password" placeholder="Գաղտնաբառ" />
                        </div>
                        <div className={styles.formgroup}>
                            <label className={styles.label} htmlFor="confirmpassword">Հաստատում</label>
                            <input className={styles.input} value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" name="confirmpassword" placeholder="Կրկնի՛ր գաղտնաբառը" />
                        </div>
                    </div>
                    <div className={styles.formgroup}>
                        <label className={styles.label} htmlFor="phone">Հեռախոսահամար</label>
                        <div>
                            <label for="area_code" class={styles.phonecode}> <img className={styles.flag} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/800px-Flag_of_Armenia.svg.png" />+374</label>
                            <input className={styles.phone} value={phone} onChange={hadlePhoneChange} type="text" placeholder="6 նիշ" name="phoneNumber" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <button className={styles.btn} type="submit">Ուղարկել հայտը</button>
            </div>
        </form>
    </div>
}
