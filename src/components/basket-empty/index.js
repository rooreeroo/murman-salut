import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';
import {Link} from "react-router-dom";

function BasketEmpty(props) {
  const cn = bem('BasketEmpty');

  return (

    <div className={cn()}>
      <p className={cn('title')}>В вашей корзине еще нет товаров...</p>
      {/*<p className={cn('description')}>*/}
      {/*  Главная цель вашей корзины - хранить классные товары, которые вы можете купить в нашем магазине.*/}
      {/*  Порадуйте корзину своим выбором, ищите кнопки <span onClick={props.onClose}><Link to={'/'}>Добавить</Link></span> на сайте!</p>*/}
    </div>
  )
}

BasketEmpty.propTypes = {

}

BasketEmpty.defaultProps = {

}

export default React.memo(BasketEmpty);
