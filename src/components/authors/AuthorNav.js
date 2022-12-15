import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "./author.css"

export function AuthorNav(){

    const {t} = useTranslation();

    return(
        <div>
            <Nav id="auth-link">
                <Nav.Link style={{padding : '8px 0'}}><Link to="/anton">{t("anton")}</Link></Nav.Link>
                <Nav.Link><Link to="/oleg">{t("oleg")}</Link></Nav.Link>
            </Nav>
            <hr id="stupid"/>
        </div>
                
                

    )
}