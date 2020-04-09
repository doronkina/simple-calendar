import React from 'react';

import analytics from '../../../imgs/navBtns/analytics.svg';
import product from '../../../imgs/navBtns/product.svg';
import users from '../../../imgs/navBtns/users.svg';
import siteBuilder from '../../../imgs/navBtns/siteBuilder.svg';
import broadcasts from '../../../imgs/navBtns/broadcasts.svg';
import mailingLists from '../../../imgs/navBtns/mailingLists.svg';
import marketing from '../../../imgs/navBtns/marketing.svg';
import payments from '../../../imgs/navBtns/payments.svg';
import settings from '../../../imgs/navBtns/settings.svg';

import './NavBtns.scss';

const NavBtns = () => {
    return (
        <div className="navBtns">
            <div>
                <img src={analytics} alt="analytics" />
                <span>Аналитика</span>
            </div>
            <div>
                <img src={product} alt="product" />
                <span>Продукт</span>
            </div>
            <div className="currentPage">
                <img src={users} alt="users" />
                <span>Пользователи</span>
            </div>
            <div>
                <img src={siteBuilder} alt="siteBuilder" />
                <span>Конструкор сата</span>
            </div>
            <div>
                <img src={broadcasts} alt="broadcasts" />
                <span>Трансляции</span>
            </div>
            <div>
                <img src={mailingLists} alt="mailingLists" />
                <span>Рассылка</span>
            </div>
            <div>
                <img src={marketing} alt="marketing" />
                <span>Маркетинг</span>
            </div>
            <div>
                <img src={payments} alt="payments" />
                <span>Платежи</span>
            </div>
            <div>
                <img src={settings} alt="settings" />
                <span>Настроки</span>
            </div>
        </div>
    );
}

export default NavBtns;
