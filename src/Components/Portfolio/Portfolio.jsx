import React from "react";
import style from "./Portfolio.module.css";


const Portfolio = () => {
    return (
        <main>

            <h1 className={style.h1}>
                Nosso Portfólio!
            </h1>
            <h2>
                Aqui você encontra nossos melhores trabalhos
            </h2>
            
            <input type="radio" className={style.input} name="slide" />
            <input type="radio" className={style.input} name="slide" />
            <input type="radio" className={style.input} name="slide" />
            <input type="radio" className={style.input} name="slide" />
            <input type="radio" className={style.input} name="slide" />
            <input type="radio" className={style.input} name="slide" />

            <div className={style.div} >
                <ul className={style.ul} >
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGF0dG9vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </li>
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1594070182331-51452dcd61c3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRhdHRvb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </li>
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRhdHRvb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </li>
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1482328177731-274399da39f0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHRhdHRvb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    </li>
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRhdHRvb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    </li>
                    <li className={style.li} >
                        <img className={style.img} src="https://images.unsplash.com/photo-1575492899586-009d962fc732?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRhdHRvb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=601" />
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Portfolio;