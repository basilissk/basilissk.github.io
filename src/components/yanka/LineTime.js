import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { useTranslation } from "react-i18next";

export function LineTime(){

  const {t} = useTranslation();

  return(
    <div>
      
      <Timeline lineColor={'#5d4508'} > {/*полоса */}
        <TimelineItem
          key="001"
          dateText="1882—1915"
          dateInnerStyle={{ background: '#94814f' }}
          style={{ color: '#5d4508' }} //точки
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("yanka-h1")}</h3>
          {/* <h4>Молодость</h4> */}
          <p>{t("yanka-timedesc1")}
            {/* Родился в селе Акинчицы Минского уезда Минской губернии. Родители - Михал Казимирович и Анна Юрьевна (урожденная Лёсик) из 
            села Николаевщина (сейчас 12 км от Стоубцева). Из их 13 детей до совершеннолетия дожили только 9. Отец был лесником в 
            поместьях Радзивилов, а мать - фермером. Братья Владимир (1879—1954), Алесь (1880—1940), Иосиф (1895—1980), Михал 
            (1897—1991), сестры Михалина (1887—1977), Юзефа (1891—1964), Мария (1900). Вскоре после рождения Костуса, так на родине звали 
            Константина, семья переехала в урочище Ласток (или Сухощина), затем, в 1890-1904 годах, Мицкевичи жили в лесничьем поселке 
            Альбут под Николаевщиной. */}
          </p>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="1915—1930"
          dateInnerStyle={{ background: '#d1ae55', color: '#fff' }}
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("yanka-h2")}</h3>
          {/* <h4 style={{ color: '#61b8ff' }}>Между войнами</h4> */}
          <p>{t("yanka-timedesc2")}
            {/* Во время Первой мировой войны, с 1915 г., вместе с семьей находился беженцем в Московской губернии. Мобилизован, в 1916 
            окончил Московскую Александровскую военную академию, служил в запасном полку в Перми. Тем временем семья переехала в Обаян 
            (ныне Курская область России). Летом 1917 года он был отправлен на румынский фронт в звании подпоручика, но вскоре по 
            состоянию здоровья был в отпуске. Наконец, как учитель, Константин Мицкевич (Якуб Колас) был освобожден от военной службы и 
            остался с семьей в Обаяне, работая учителем и школьным инструктором. */}
          </p>
        </TimelineItem>
        
        <TimelineItem
          key="003"
          dateText="1930—1942"
          dateInnerStyle={{ background: '#9d823e' }}
          bodyContainerStyle={{
            background: '#ddddb8',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#65562f' }}>{t("yanka-h3")}</h3>
          {/* <h4>Последние годы</h4> */}
          <p>{t("yanka-timedesc3")}
            {/* После нападения Германии на СССР во время Второй мировой войны поэт жил в подмосковной Клязьме, Ташкенте, Москве. В 1944 году 
            Якубу Коласу было присвоено звание заслуженного деятеля науки БССР. В конце 1944 года вернулся в Минск. */}
          </p>
        </TimelineItem>
      </Timeline>
    </div>
  )
}
