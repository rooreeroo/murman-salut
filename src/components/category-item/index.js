import React, {useCallback} from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import Item from "../item";
import './style.css';

function CatItem(props) {
  const cn = bem('CatItem');

  const callbacks = {
    onAdd: useCallback((e) => props.onAdd(props.item._id), [props.onAdd, props.item])
  };

  return (
    <>
      <div className={cn()}>
        <div className={cn('title')}>
          <p>{props.item.category}</p>
        </div>
      </div>
      <Item item={props.item} onAdd={props.onAdd} />
    </>
  )
}

CatItem.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func,
}

CatItem.defaultProps = {
  onAdd: () => {},
}

export default React.memo(CatItem);