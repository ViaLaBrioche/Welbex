import React from "react";
import { ReactComponent as IconTelegram } from './Icons/telegram.svg'
import { ReactComponent as IconViber } from './Icons/viber.svg'
import { ReactComponent as IconWhatsapp } from './Icons/whatsapp.svg'
import { ReactComponent as LogoLeft } from './Icons/part1.svg'
import { ReactComponent as LogoRight } from './Icons/part2.svg'
import { ReactComponent as RedBall } from './Images/redball.svg'
import { ReactComponent as PurpleBall } from './Images/purpleball.svg'
import { ReactComponent as PurpleLightBall } from './Images/purplelight.svg'
import './header.scss'

export const Header = () => {
    const navigateMenu = ['Услуги', 'Виджеты', 'Интеграции', 'Кейсы', 'Сертификаты']

  return <header className="header__container">
            
            <div className="left">
                <div className="logo">
                    <LogoLeft/>
                    <LogoRight/>
                </div>
                <div className="text">
                    <span>крупный интегратор CRM <br/> в Росcии и ещё 8 странах</span>
                </div>
            </div>
            <div className="menu">
                {navigateMenu.map((e) => <span className="header__menu__btn" name={e} type="button" >{e}</span>)}                
            </div>
            <PurpleBall className="purpleball"/>
            <RedBall className="redball"/>
            <PurpleLightBall className="purplelightball"/>
            <span className="numberPhone">+7 555 555-55-55</span>
            <div className="right">
                <IconTelegram/>
                <IconViber/>
                <IconWhatsapp/>
            </div>
            
            
  </header>
};
