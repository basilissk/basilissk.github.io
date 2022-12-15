import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import  yakub from '../../img/Yakub/ЯкубГориз.jpg'
import  yanka from '../../img/Yanka/ЯнкаГоризонт.jfif'
import  nil from '../../img/Nil/NilHoriz.jpg'
import  korotky from '../../img/Korotky/KorotkyHoriz.jpg'
import  maks from '../../img/Maks/MaksHoriz.jpeg'
import data from "../../data.json"
import "./search.css"


export function ListPoet(){

    const {t} = useTranslation();
    // let way = "/poet"
    
    const [writers, setWriters] = useState(data);
    const [value, setValue] = useState('');

    const filteredWriters = writers.filter(writer =>{
        return writer.name.toLowerCase().includes(value.toLowerCase()) || writer["en-name"].toLowerCase().includes(value.toLowerCase());
    })
    
    return(
        <div>
            <div className="background"></div>
            <Container id="list-container">
            <div className="search-div">
                <form action="">
                    <input type="text" placeholder={t("search-holder")} onChange={(event)=>setValue(event.target.value)} className="mySearch"/>
                    <button className="search-btn" type="submit" disabled ></button>
                </form>
            </div>
            <div className="wrap">
                <h4>{t("list")}</h4>
                <div className="cards-wrap" style={{display : 'flex', flexWrap : 'wrap'}}>
                    {
                        filteredWriters.map((writer, index)=>{
                            let photka;
                            if(writer.name.toLowerCase().includes("якуб")){
                                photka = yakub;
                            } else if(writer.name.toLowerCase().includes("янка")){
                                photka = yanka;
                            } else if(writer.name.toLowerCase().includes("нил")){
                                photka = nil;
                            } else if(writer.name.toLowerCase().includes("максим")){
                                photka = maks;
                            } else if(writer.name.toLowerCase().includes("владимир")){
                                photka = korotky;
                            }
                            let names = writer["en-name"];
                            return (
                                <Card style={{ width: '250px', margin : "0px 20px 20px 0px"}}>
                                    <Card.Img variant="top" src={photka} style={{width : "100%", height : "160px", objectFit : "cover"}} />
                                    <Card.Body>
                                        <Card.Title style={{textAlign : "center", fontSize : "20px"}}>{t(names)}</Card.Title>
                                        <Link id="card-link" className="more" to={writer.path}>{t("read-more")}</Link>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                    
                </div>
                
                {/* <ListGroup>
                    <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="/yanka">{t("writer-yanka")}</a></ListGroup.Item>
                    <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="/yakub">{t("writer-yakub")}</a></ListGroup.Item>
                    <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="/nil">{t("writer-nil")}</a></ListGroup.Item>
                    <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="/korotky">{t("writer-korotky")}</a></ListGroup.Item>
                    <ListGroup.Item style={{border: 'none', display : 'inline'}}><a href="/maks">{t("writer-maks")}</a></ListGroup.Item>
                </ListGroup>    */}
            </div>
            
           
        </Container> 
        
        </div>
        
    )
}
    

      
