import React from 'react';
import './ourclients.css'
const ourClientsList = [
    {
        logo: 'images/logo-stg.png',
        name: "СТГ",
        description: 'Компания "Сумская Торговая Группа" ("СТГ") основана в 1996 году и специализируется на оптово-розничной торговле строительно-отделочными материалами, хозяйственными товарами и посудой.',
    },
    {
        logo: 'images/logo-sdu.png',
        name: "Сумський державний університет",
        description: 'Сумський державний університет входить до каталогу кращих дослідницьких університетів світу від Шанхайського рейтингу на позиції 500+ та до авторитетного каталогу кращих університетів світу від рейтингу Times Higher Education (THE).',
    },
    {
        logo: 'images/logo-snau.jpeg',
        name: 'Сумський національний аграрний університет',
        description: 'Це вищий навчальний заклад IV рівня акредитації, один з кращих аграрних вишів України.',
    }

];

const ourClientsBlock = (
    ourClientsList.map((el, index) =>
        <div className="ourclients-cart" key={index}>
            <img src={el.logo} className="ourclients-cart__logo" alt={el.name}/>
            <div className="ourclients-text">
                <h3 className="ourclients-text__title">{el.name}</h3>
                <p className="ourclients-text__description">{el.description}</p>
            </div>
        </div>
    )
);
const OurClients = () => {
    return(
        <div className="ourclients">
            <div className="container">
                <h3 className="outclients__title">Наші Клієнти</h3>
                <p className="outclients__text">У нас понад 100 вдячних клієнтів</p>
                <div className="ourclients-wrap">
                    {ourClientsBlock}
                </div>
            </div>
        </div>
    )
};
export default OurClients;