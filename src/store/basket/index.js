import StateModule from "../module";
import {NotificationManager} from "react-notifications";
import plural from "plural-ru";
import numberFormat from "../../utils/numberFormat";
import React from 'react'




/**
 * Состояние корзины
 */
let localItem = JSON.parse(localStorage.getItem('items'))

class BasketState extends StateModule{

  /**
   * Начальное состояние
   * @return {Object}
   */

  initState() {
    return {
      items: localItem || [],
      sum: Number(localStorage.getItem('sum')) || 0,
      amount: Number(localStorage.getItem('amount')) || 0,
    };
  }



  async sendForm(data) {
      let req = await fetch(`./file.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          //"Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(data)
      });
      let res = await req.json()


      if (req.status === 200) {
        data.num = res;
        this.sendToUser(data);
      } else {
        NotificationManager.error('Попробуйте еще раз или свяжитесь с нами', 'Ошибка заказа', 4000);
      }
  }
  async sendToUser(data) {
    let req = await fetch(`./user.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        //"Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(data)
    });


    if (req.status === 200) {
      this.clearBasket();
      NotificationManager.success('Спасибо за заказ!', 'Заказ создан', 4000);

    } else {
      NotificationManager.error('Ваш заказ сформирован, ожидайте звонка', 'Ошибка письма', 4000);
    }
  }
  /**
   * Добавление товара в корзину
   * @param _id Код товара
   */
  addToBasket(_id) {
    let sum = 0;
    // Ищем товар в корзие, чтобы увеличить его количество. Заодно получаем новый массив items
    let exists = false;
    const items = this.getState().items.map(item => {
      let result = item;
      // Искомый товар для увеличения его количества
      if (item._id === _id) {
        exists = true;
        result = {...item, amount: item.amount + 1};
      }
      // Добавляея в общую сумму
      sum += result.price * result.amount;
      return result
    });

    // Если товар не был найден в корзине, то добавляем его из каталога
    if (!exists) {
      // Поиск товара в каталоге, чтобы его в корзину добавить
      // @todo В реальных приложения будет запрос к АПИ на добавление в корзину, и апи выдаст объект товара..
      const item = this.store.getState().catalog.items.find(item => item._id === _id);
      items.push({...item, amount: 1});
      // Досчитываем сумму
      sum += item.price;
    }
    let amount = items.reduce((sum, item) => {return sum + item.amount}, 0);
    // Установка состояние, basket тоже нужно сделать новым
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('sum', sum);
    localStorage.setItem('amount', amount);
    NotificationManager.info(`Товар добавлен в корзину ` +
        `Всего в корзине: ${amount} ${plural(amount, 'товар', 'товара', 'товаров')} ` +
        `на сумму: ${numberFormat(sum)} ₽ `, 'Корзина', 6000)

    this.setState({
      items,
      sum,
      amount: amount
    }, 'Добавление в корзину');
  }
  addBasket(_id) {
    let sum = 0;
    // Ищем товар в корзие, чтобы увеличить его количество. Заодно получаем новый массив items
    let exists = false;
    const items = this.getState().items.map(item => {
      let result = item;
      // Искомый товар для увеличения его количества
      if (item._id === _id) {
        exists = true;
        result = {...item, amount: item.amount + 1};
      }
      // Добавляея в общую сумму
      sum += result.price * result.amount;
      return result
    });

    // Если товар не был найден в корзине, то добавляем его из каталога
    if (!exists) {
      // Поиск товара в каталоге, чтобы его в корзину добавить
      // @todo В реальных приложения будет запрос к АПИ на добавление в корзину, и апи выдаст объект товара..
      const item = this.store.getState().catalog.items.find(item => item._id === _id);
      items.push({...item, amount: 1});
      // Досчитываем сумму
      sum += item.price;
    }
    let amount = items.reduce((sum, item) => {return sum + item.amount}, 0);
    // Установка состояние, basket тоже нужно сделать новым
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('sum', sum);
    localStorage.setItem('amount', amount);

    this.setState({
      items,
      sum,
      amount: amount
    }, 'Добавление в корзину');
  }

  /**
   * Добавление товара в корзину
   * @param _id Код товара
   */
  removeOneFromBasket(_id) {
    let sum = 0;
    // Ищем товар в корзие, чтобы увеличить его количество. Заодно получаем новый массив items
    let items = this.getState().items.map(item => {
      let result = item;
      if (item._id === _id) {
        result = {...item, amount: item.amount - 1}
      }

      return result
    }).filter(item => {
      // Удаляемый товар

      if (item.amount === 0) return false
      // Подсчёт суммы если твоар не удаляем.
      sum += item.price * item.amount;
      return true;
    })


    let amount = items.reduce((sum, item) => {return sum + item.amount}, 0);
    items.length !== 0 ? localStorage.setItem('items', items) : localStorage.removeItem('items');
    sum !== 0 ? localStorage.setItem('sum', sum) : localStorage.removeItem('sum');
    amount !== 0 ? localStorage.setItem('amount', amount) : localStorage.removeItem('amount');

    this.setState({
      items,
      sum,
      amount: amount
    }, 'Удаление из корзины')
  }
  removeFromBasket(_id) {
    let sum = 0;
    const items = this.getState().items.filter(item => {
      // Удаляемый товар
      if (item._id === _id) return false
      // Подсчёт суммы если твоар не удаляем.
      sum += item.price * item.amount;
      return true;
    });
    let amount = items.reduce((sum, item) => {return sum + item.amount}, 0);
    items.length !== 0 ? localStorage.setItem('items', items) : localStorage.removeItem('items');
    sum !== 0 ? localStorage.setItem('sum', sum) : localStorage.removeItem('sum');
    amount !== 0 ? localStorage.setItem('amount', amount) : localStorage.removeItem('amount');

    this.setState({
      items,
      sum,
      amount: amount
    }, 'Удаление из корзины')
  }
  clearBasket() {
    localStorage.removeItem('items');
    localStorage.removeItem('sum');
    localStorage.removeItem('amount');
    this.setState(this.initState())

  }
}

export default BasketState;
