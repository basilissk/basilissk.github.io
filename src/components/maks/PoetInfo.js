import React from "react";
import { useTranslation } from "react-i18next";
import Maks from '../../img/Maks/MaksHoriz.jpeg'



export function PoetInfo(){

    const {t} = useTranslation();

    return(
        <div>
            <h2 className="poet-title">{t("maks-name")}{/*Якуб Колас*/}</h2>
            <div className="poet-info-wrap">
                <p className="poet-info">
                {t("maks-info")}
                {/* Якуб Колас, сокр. Константин Михайлович Мицкевич (22 октября (3 ноября) 1882, слобода Акинчицы 
                (ныне в черте города Столбцы) — 13 августа 1956, Минск) — белорусский поэт, прозаик, драматург, критик, публицист, переводчик, 
                ученый, педагог, общественный деятель; один из основоположников современной белорусской литературы и литературного языка. 
                Народный поэт Беларуси (1926). Академик АН Беларуси (1928). Заслуженный деятель науки Беларуси (1944).*/}
                </p>
                <div className="poet-img">
                    <img src={Maks} alt="Фото Богдановича>"/>
                </div>
            </div>
        </div>
    )
}