import React from "react";
import "./main.scss";
import { ReactComponent as RedLightBall } from "./Images/redlight.svg";
import { ReactComponent as RedSmallBall } from "./Images/redsmallball.svg";

export const Main = () => {
  return (
    <main className="main__container">
      <RedSmallBall className="redball__small" />
      <RedLightBall className="redball__light" />
      <div className="left">
        <h1 className="title">
          Зарабатывайте <br />
          больше <br /> <span className="gardient">с WELBEX </span>
        </h1>
        <span className="text">
          Развиваем и контролируем <br />
          продажи за вас
        </span>
      </div>
      <div className="right">
        <div className="up">
          <p className="free__consult">
            Вместе с 
            <span className="gardient">бесплатной </span>
            <br />
            <span className="gardient"> консультацией </span>
            мы дарим:
          </p>
        </div>
        <div className="vidjet">
          <span className="right_title">ВИДЖЕТЫ</span>
          <span className="description">
            <br />
            30 готовых
            <br />
            решений
          </span>
        </div>
        <div className="dashboard">
          <span className="right_title">DASHBOARD</span>
          <span className="description">
            <br />
            с показателями
            <br />
            вашего бизнеса
          </span>
        </div>
        <div className="skype">
          <span className="right_title">SKYPE Аудит</span>
          <span className="description">
            <br />
            отдела продаж
            <br />и CRM системы
          </span>
        </div>
        <div className="days">
          <span className="right_title">35 ДНЕЙ</span>
          <span className="description">
            <br />
            использования
            <br />
            CRM
          </span>
        </div>
        <div className="btn">
          <button>Получить консультацию</button>
        </div>
      </div>
    </main>
  );
};
