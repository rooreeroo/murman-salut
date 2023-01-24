import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function List(props) {
  const cn = bem('List');
  let cat = '';
  function changeCat(item) {
    cat = item.category;
    return props.renderCatItem(item)
  }


  return (

    <div className={cn()}>

      {props.items.map(item =>
      !item.hide ?
      <div key={item._id+Math.random(item.price, 5000)} className={cn('item')}>
        {cat !== item.category ? changeCat(item) : props.renderItem(item)}
      </div>
          : null
      )}
      <p className={cn('text')}>Оплата при получении товара. Каждый товар сопровождается сертификатом. <br/>
      Срок доставки  требует персонального согласования. <br/>
      Цена доставки: Мурманск, Кола, Североморск — 200 руб. в течение 12 часов <br/>
      СРОЧНАЯ  ДОСТАВКА и доставка в другие города по договорённости.</p>
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  renderItem: propTypes.func,
  renderCatItem: propTypes.func
}

List.defaultProps = {
  items: [],
  renderItem: (item) => {
    return item.toString()
  }
}

export default React.memo(List);
