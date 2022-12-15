import React from "react";
import { Link } from "react-router-dom";
import Yakub from '../../img/Yakub/ЯкубГориз.jpg'
import { useTranslation } from "react-i18next";

export function DayPoet(){

    const{t} = useTranslation();

    return(
        <>
        <section className="writer-of-day">
        {/* <div className="container"> */}
            <h3>{t("daypoet-name")}</h3>
            <div className="about-writer-wrap">
                <div className="writer-info-wrap">
                    <p className="about-writer">
                        {/* Яку́б Ко́лас (настоящее имя и фамилия Константи́н Миха́йлович Мицке́вич; 22 октября (3 ноября) 1882 — 13 августа 1956, Минск) —
                         белорусский писатель, драматург, поэт и переводчик, общественный деятель. Один из классиков и основоположников новой 
                         белорусской литературы. Народный поэт Белорусской ССР (1926). Академик АН Белорусской ССР (1928). Член СП СССР (1934). 
                         Заслуженный деятель науки Белорусской ССР (1944). Член ВКП(б) с 1945 года. */}
                         {t("daypoet-info")}
                    </p>
                    <Link id="a-link" className="more" to="/yakub">{t("more")}</Link>
                </div>
                <div className="writer-img">
                    <img src={Yakub} alt="#Фотка Якуба"/>
                </div>
            </div>
        {/* </div> */}
        </section>
            
        </>
    )
}