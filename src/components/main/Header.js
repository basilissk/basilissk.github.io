import React from "react";
import { useTranslation } from "react-i18next";

export function Header(){
    const{t} = useTranslation();
    return(
            <p className="site-info">
                {/* Мы рады, что вы посетили наш блог. Этот блог про самых выдающихся писателей Беларуси. Здесь вы можете узнать про
                своего любимого писателя любую информацию. Возможно некоторая для вас будет новая. */}
                {t("main-info")}
            </p>    
    )
}