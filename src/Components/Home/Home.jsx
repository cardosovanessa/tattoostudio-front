import React from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <main className={style.main}>
      <div className={style.home} id={style.img}>Mafia's Tattoo Studio</div>
      <div className={style.home} id={style.middle}>
        <div id={style.img2}></div>
        <div id={style.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repellendus sint, suscipit natus similique veritatis quas! Consequuntur qui dicta ratione. In quod voluptatum dicta, consequuntur modi non mollitia ex voluptatem!</div>
      </div>        
      <div className={style.home} id={style.img3}>localidades</div>
      <div className={style.home} id={style.bottom}>
        <div className={style.filiais} id={style.studio1}> 
          <h2 className={style.address}>pipipi</h2> 
        </div>

          <div className={style.filiais} id={style.studio2}>
        <h2 className={style.address}>pipipi</h2> 
        </div>
        
        <div className={style.filiais} id={style.studio3}>
          <h2 className={style.address}>pipipi</h2> 
        </div>
      </div>
    </main>
  );
};

export default Home;