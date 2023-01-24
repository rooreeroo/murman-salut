import React from "react";
import {cn as bem} from "@bem-react/classname";
import './style.css';
import {Link} from "react-router-dom";

function Contact(props) {
  const cn = bem('Contact');

  return (


    <div className={cn()}>
      <div className={cn('banner')}>
        <img
          src="/img/salut-big.gif"
          // src="https://i.gifer.com/origin/8c/8ca54fd5f1dffe9143c22d1ce0e95410.gif"
          // src="https://static.wixstatic.com/media/b3007b_2762f2b408d642b7a9c6a519244819bf~mv2.jpg/v1/fill/w_980,h_524,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/K8x5c1D5H7w_.jpg"
          alt="banner"
        />
        <p className={cn('top-left')}>ФЕЙЕРВЕРКИ В МУРМАНСКЕ</p>
        <p className={cn('top-right')}>Доставка  в течение 12 часов</p>
        <p className={cn('top-right1')}>СРОЧНАЯ ДОСТАВКА ОТ ОДНОГО ЧАСА</p>
        <Link to={"/shop"} className={cn('bottom-right')}>ПРОДАЖА</Link>
        <p className={cn('bottom-right1')}>ПРОВЕДЕНИЕ</p>
      </div>
      <div className={cn('hr')}/>
      <div className={cn('hr')}/>
      <div className={cn('points')}>
        <p className={cn('points-title')}>Точки розничных продаж (пункты выдачи): </p>
        <p className={cn('points-name')}>г. Североморск Магазин «ЛАВКА ЧУДЕС» ул. Сафонова-17.</p>
        <p className={cn('points-name')}>г. Мурманск пр. Героев Североморцев-100 а. Пункт выдачи.</p>
        <p className={cn('points-name')}>г. Мончегорск: ул Ленина-8, маг. ФЕЙЕРВЕРКИ. </p>
        <p className={cn('points-name')}>г. Мончегорск: ул. Новопроложенная - 16, ТЦ «ТАИР» 2 этаж отдел КАНЦЕЛЯРИЯ</p>
        <p className={cn('points-name')}>г. Апатиты магазин УПАКОШКА ул. Космонавтов -36.</p>
        <p className={cn('points-name')}>г. Кандалакша Магазин «Индустрия праздника» Привокзальная площадь-1.</p>
      </div>
      <div className={cn('hr')}/>
      <div className={cn('hr')}/>
      <div className={cn('contacts')}>
        <p className={cn('contacts-title')}>ОБРАЩАЙТЕСЬ</p>

        <div className={cn('flex')}>
          <div className={cn('contacts-left')}>
          <img
            src="/img/salut-small.gif"
            // src="https://static.wixstatic.com/media/b3007b_6cbba7204ee046d7b555a7667e256487~mv2.gif"
            alt=""
          />
        </div>
          <div className={cn('contacts-right')}>
            <p className={cn('contacts-phones')}>ПРОДАЖА БЫТОВОЙ ПИРОТЕХНИКИ:<br/> (8 152) 70-26-74, +7 911 300 26 74.</p>
            <p className={cn('contacts-phones')}>ОРГАНИЗАЦИЯ ПИРОТЕХНИЧЕСКОГО ШОУ:<br/>  (8 152) 78-12-80, +7 921 708 12 80</p>
            <p className={cn('contacts-vk')}><span>Мы в контакте: </span><img
              // src="data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2232%22%20height%3D%2232%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2015.36C0%208.11923%200%204.49884%202.24942%202.24942%204.49884%200%208.11923%200%2015.36%200h1.28c7.2408%200%2010.8612%200%2013.1106%202.24942C32%204.49884%2032%208.11923%2032%2015.36v1.28c0%207.2408%200%2010.8612-2.2494%2013.1106C27.5012%2032%2023.8808%2032%2016.64%2032h-1.28c-7.24077%200-10.86116%200-13.11058-2.2494C0%2027.5012%200%2023.8808%200%2016.64v-1.28Z%22%20fill%3D%22%2307F%22%2F%3E%3Cpath%20d%3D%22M17.092%2023.3333C9.87204%2023.3333%205.49164%2018.324%205.32001%2010h3.65674c.11399%206.1146%202.89595%208.7057%205.02845%209.2386V10h3.5044v5.277c2.057-.228%204.21-2.6283%204.9337-5.277h3.4492c-.552%203.2571-2.8959%205.6574-4.552%206.6475%201.6574.8005%204.324%202.8959%205.3525%206.6858h-3.7912c-.8005-2.5334-2.7614-4.4956-5.391-4.7621v4.7621h-.4188Z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E"
              src="/img/VK.com-logo.svg.png"
              alt="vk"
              onClick={() => {window.open('https://vk.com/kolskysalut', '_blank').focus()}}
            /></p>
            {/*<p className={cn('contacts-phone')}>+7 911 300 26 74</p>*/}
            <p className={cn('contacts-email')}>Напишите нам:&nbsp;
              <span onClick={() => {window.open('mailto:salut.ks@gmail.com?subject=Письмо%20от%20покупателя&body=Имя:%0AНомер%20для%20связи:', '_blank').focus()}}>
                salut.ks@gmail.com
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Contact)