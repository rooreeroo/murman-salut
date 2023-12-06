import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import numberFormat from "../../utils/numberFormat";
import {cn as bem} from "@bem-react/classname";
import './styles.css';

function ItemBasket(props) {
  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: useCallback((e) => props.onRemove(props.item._id), [props.onRemove,  props.item]),
      onDelete: useCallback((e) => props.onDelete(props.item._id), [props.onDelete,  props.item]),
      onAdd: useCallback((e) => props.onAdd(props.item._id), [props.onAdd,  props.item]),
  };

  return (
    <div className={cn()}>
      {/*<div className={cn('id')}>{props.item._id}</div>*/}
      <div className={cn('title')}>{props.item.title}</div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
          <div className={cn('cell')}/>
          {/*<div className={cn('cell')}><button onClick={callbacks.onDelete}>-</button></div>*/}
        <div className={cn('cell')}><button onClick={callbacks.onDelete}>-</button> {numberFormat(props.item.amount || 0)} уп <button onClick={callbacks.onAdd}>+</button></div>
          {/*<div className={cn('cell')}><button onClick={callbacks.onAdd}>+</button></div>*/}
          <div className={cn('cell')}>{numberFormat(props.item.price * props.item.amount)} ₽</div>
        <div className={cn('cell')}><button onClick={callbacks.onRemove}>Удалить</button></div>
      </div>
    </div>
  )
}

ItemBasket.propTypes = {
  item: propTypes.object.isRequired,
  onRemove: propTypes.func,
    onDelete: propTypes.func,
    onAdd: propTypes.func,
}

ItemBasket.defaultProps = {

}

export default React.memo(ItemBasket);
