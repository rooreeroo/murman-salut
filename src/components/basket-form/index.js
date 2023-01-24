import React from 'react';
import {cn as bem} from "@bem-react/classname";
import './style.css';
import {Input} from "../input/Input";
import PropTypes from "prop-types";

function BasketForm(props) {
  const cn = bem('BasketForm');


  return (

    <div className={cn()}>
      <form className={cn('form')} onSubmit={props.handleSubmit}>
        <div className={cn('group')}>
          <div className={cn('string')}>
            <p className={cn("input-description")}>Имя: </p>
            <Input
              className={cn("input-form")}
              placeholder="Иванов Иван"
              inputId="name"
              initValue=""
              length = {2}
            />
          </div>
          <div className={cn('string')}>
            <p className={cn("input-description")}>Телефон: </p>
            <Input
              className={cn("input-form")}
              placeholder="+79999999999"
              type='tel'
              inputId="phone"
              initValue={''}
              length = {11}
            />
          </div>
          <div className={cn('string')}>
            <p className={cn("input-description")}>Email адрес: </p>
            <Input
              className={cn("input-form")}
              placeholder="example@email.com"
              inputId="email"
              initValue=""
              length = {7}
            />
          </div>
        </div>

        <div className={cn('string-adr')}>
          <p className={cn("input-description")}>Адрес для доставки, или самовывоз: </p>
          <Input
            className={cn("input-form")}
            placeholder="Мурманск, Ленина 12 кв 12"
            inputId="address"
            initValue=""
            length = {5}
          />
        </div>
        <div className={cn('string')}>
          <Input
            className={cn("input-checkbox")}
            type="checkbox"
            inputId="age"
          />
          <p className={cn("input-description")}>Мне есть 18 лет </p>
        </div>
        <div className={cn("buttons")}>
          {props.total}
          <button className={cn("submit-button")} type="Submit" disabled={false}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  )
}

BasketForm.propTypes = {
  total: PropTypes.node,
  handleSubmit: PropTypes.func,
}

BasketForm.defaultProps = {

}

export default React.memo(BasketForm);