import React from 'react';
import propTypes from 'prop-types';
import {cn as bem} from "@bem-react/classname";
import './style.css';

function Footer(props) {

  const cn = bem('Footer');

  const handlerScrollUp = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      window.scrollBy(0, -100);
      setTimeout(handlerScrollUp, 10);
    }
  };
  let date = new Date().getFullYear();


  return (
    <div className={cn()}>
      <button onClick={handlerScrollUp} id={"myBtn"} title="Перейти к началу">Вверх</button>
      <p className={cn('copy')}>&copy; Copyright {date}, Кольский Салют</p>
    </div>
  )
}

Footer.propTypes = {
}

Footer.defaultProps = {

}

export default React.memo(Footer);