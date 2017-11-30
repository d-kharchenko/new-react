import React from 'react';
import './ourcompany.css'
const OurCompany = () =>{
    return(
        <div className='ourcompany'>
            <div className='container'>
                <h2 className='ourcompany__title'>Наша компанія</h2>
                <p className='ourcompany__text'>Наше підприємство 10 років на ринку програмного забезпечення і за цей час зарекомендувало себе як відповідальний і надійний партнер для підприємств різної сфери діяльності.</p>
                <div className='ourcompany-about'>
                    <div className='ourcompany-block'>
                        <img src="images/our-block-box.png" className='ourcompany-block__img' alt='наша компанія'/>
                        <h3 className='ourcompany-block__title'>ПРОДАЖ І ПОСТАВКА ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ</h3>
                        <p className='ourcompany-block__text'>Програмне забезпечення 1С, Microsoft, Linux, Агент+,MeDoc, 1С-Звіт</p>
                    </div>
                    <div className='ourcompany-block'>
                        <img src="images/our-block-gear.png" className='ourcompany-block__img' alt='наша компанія'/>
                        <h3 className='ourcompany-block__title'>ПІДТРИМКА СИСТЕМ 1С: ПІДПРИЄМСТВО ВЕРСІЙ 8 ТА 7.7</h3>
                        <p className='ourcompany-block__text'>Впровадження, розробка, навчання та супроводження 1С: Підприємство 8 та 1С: Підприємство 7.7. Інформаційно-технологічний супровід (ІТС), 1С-Звіт</p>
                    </div>
                    <div className='ourcompany-block'>
                        <img src="images/our-block-search.png" className='ourcompany-block__img' alt='наша компанія'/>
                        <h3 className='ourcompany-block__title'>АДМІНІСТРУВАННЯ КОМП'ЮТЕРНИХ СИСТЕМ</h3>
                        <p className='ourcompany-block__text'>Встановлення, налаштування та підтримка операційних систем Windows, Linux.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default OurCompany;