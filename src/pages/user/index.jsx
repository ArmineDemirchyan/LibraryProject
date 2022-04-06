import React from 'react';
import styles from "./user.module.css";
const User = () =>{
    return(
        <div className={styles.main}>
      {/* className={navbar ? 'nav active' : 'navbar'} */}
      <nav>
        <div className={styles.navright}>
          <a href="#header">ԵԻՊՔ ԳՐԱԴԱՐԱՆ</a>
        </div>
        <div className={styles.navleft}>
          <a href="#about">ԻՆՉՊԵ՞Ս ՕԳՏՎԵԼ</a>
          <a href="/login">ԳՐՔԵՐԻ ՑԱՆԿ</a>
        </div>
      </nav>
      <div>
        <div className={styles.info}>
          <div id="header" className={styles.overlay}>
            <h1>
              ԲԱՐԻ ԳԱԼՈՒՍՏ ԵԻՊՔ-Ի ԳՐԱԴԱՐԱՆ
              <span></span>
            </h1>
            <p>ԵԻՊՔ-ի օնլայն գրադարան, որտեղ կարող ես փնտրել,գտնել և ամրագրել քեզ անհրաժեշտ գրքերը։</p>
            <a href='#about'className={styles.btn}>Կարդալ ավելին</a>
          </div>
        </div>
        <div id="about" className={styles.about}>
          <div className={styles.aboutright}>
          <img src='img/libraryphoto.jpg'/>
          </div>
          <div className={styles.aboutleft}>
          <h2>ԻՆՉՊԵ՞Ս ՕԳՏՎԵԼ</h2>
          <p>ԵԻՊՔ-ի օնլայն գրադարանից օգտվելու համար մուտք գործիր քո էջ,եթե դեռ չես գրանցվել գրանցվի՛ր և 10 օրվա ընթացքում մոտեցի՛ր քոլեջի գրադարանավարին՝ գրանցումդ հաստատելու համար և դարձիր մեր օնլայն գրադարանի մասնիկը։ Շտապի՛ր մեր գրքերը քեզ են սպասում։</p>
          <h3>Ինչու՞ ընտրել հենց մեր գրադարանը</h3>
          <ol>
            <li>Մենք քեզ մոտ ենք</li>
            <li>Կարող ես ամրագրել երկար ժամանակով</li>
            <li>Ընտրել տանը, վերցնել քոլեջից</li>
            <li>Կարող ես կարդալ հենց գրադարանում</li>
            <li>Մենք քեզ չենք շտապացնում</li>
          </ol>
          </div>
        </div>
      </div>
      <footer >
        
      </footer>
    </div>
    )
}
export default User;