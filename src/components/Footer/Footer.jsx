import React from "react";
import "./footer.scss";
import { ReactComponent as IconTelegram } from "./Icons/telegram.svg";
import { ReactComponent as IconViber } from "./Icons/viber.svg";
import { ReactComponent as IconWhatsapp } from "./Icons/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__column">
        <p>О компании</p>
        <div className="column__list">
          <span>Партнёрская программа</span>
          <span>Вакансии</span>
        </div>
      </div>
      <div className="footer__column">
        <div className="column__main">
          <div className="column__list">
          <p>Меню</p>
            <span>Расчёт стоимости</span>
            <span>Услуги</span>
            <span>Виджеты</span>
            <span>Интеграции</span>
            <span>Наши клиенты</span>
          </div>

          <div className="footer__column no__title column__list">
            <span>Кейсы</span>
            <span>Благодарственные письма</span>
            <span>Сертификаты</span>
            <span>Блог на Youtube</span>
            <span>Вопрос / Ответ</span>
          </div>
        </div>
      </div>
      <div className="footer__column column__right">
        <div className="column__right__up">
          <p>Контакты</p>
        </div>
        <div className="column__list">
          <span>+7 555 555-55-55</span>
          <div className="contacts">
            <IconTelegram />
            <IconViber />
            <IconWhatsapp />
          </div>
          <span>Москва, Путевой проезд 3с1, к 902</span>
        </div>

        <div className="column__rigth__down">
          <span>©WELBEX 2022. Все права защищены.</span>
          <span className="text__underline">Политика конфиденциальности</span>
        </div>
      </div>
    </footer>
  );
};
