import React from "react";
import {cn as bem} from "@bem-react/classname";
import './style.css';

function Cells(props) {
  const cn = bem('Cells');

  return (


    <div className={cn()}>
      <p className={cn('title')}>Название, характеристика:</p>
      <p className={cn('amount')}>Количество в упаковке:</p>
      <p className={cn('price')}>Цена за упаковку:</p>
    </div>
  )
}
export default React.memo(Cells)