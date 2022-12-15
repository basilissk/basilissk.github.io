import React from "react";
import { Container, Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import oleg from '../../img/authors/Олег.jpg';
import { AuthorNav } from "./AuthorNav";
import "./author.css"

export function Oleg(){

    const {t} = useTranslation();

    return(
        <div>
            <div className="background"></div>
            <Container id="author-container">
            <AuthorNav />
            <div className="author-wrap">
                <div className="author-img">
                    <img src={oleg} alt="Олег" style={{width : '190px', height : '230px'}} />
                </div>
                <div>
                    <h2>{t("oleg-name")}</h2>
                    <p className="author-info">
                        {/* Студент БГУИР КСИС ПОИТ. Обожал программировать и пробовать себя в разных направлениях, пока ему не пришлось 
                        учиться писать сайты. С тех пор просыпаюсь ночью от кошмара, что я стал frontend разработчиком.  */}
                        {t("oleg-descript")}
                    </p>
                    <p>Telegram: <a className="links" href="https://t.me/visceral_hall" target="_blank">Речь Посполитая</a></p>
                    <p>GitHub: <a className="links" href="https://github.com/basilissk" target="_blank">basilissk</a></p>
                </div>
            </div>
            
        </Container>
        </div>
        
    )
}