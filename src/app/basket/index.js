import List from "../../components/list";
import React, {useCallback} from "react";
import BasketTotal from "../../components/basket-total";
import LayoutModal from "../../components/layout-modal";
import ItemBasket from "../../components/item-basket";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import BasketForm from "../../components/basket-form";
import BasketEmpty from "../../components/basket-empty";
import CatItem from "../../components/category-item";


function Basket(){


  const store = useStore();

  const select = useSelector(state => ({
    items: state.basket.items,
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Закрытие любой модалки
    closeModal: useCallback(() => store.get('modals').close(), []),
    // Удаление из корзины
    removeFromBasket: useCallback(_id => store.get('basket').removeFromBasket(_id), []),
    // Отправка формы
    sendForm: useCallback( data => store.get('basket').sendForm(data), []),
    removeOneFromBasket: useCallback(_id => store.get('basket').removeOneFromBasket(_id), []),
    addBasket: useCallback(_id => store.get('basket').addBasket(_id), []),
  };

  const renders = {
    itemBasket: useCallback(item => <ItemBasket item={item} onRemove={callbacks.removeFromBasket} onDelete={callbacks.removeOneFromBasket} onAdd={callbacks.addBasket}/>, []),
    catItem: useCallback(item =><CatItem item={item} onAdd={callbacks.addBasket}/>, []),
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    callbacks.closeModal();

    const {
      name: { value: name },
      phone: { value: phone },
      email: { value: email },
      address: {value: address },
      age: {checked: age}
    } = form;

    callbacks.sendForm({ name, sum: select.sum, phone, email, address, age, items: select.items });

  };


  return (
    <>
      <LayoutModal title='Корзина' onClose={callbacks.closeModal}>
        {select.items.length > 0 ? <List items={select.items} renderItem={renders.itemBasket} renderCatItem={renders.itemBasket}/> : null}
        {select.items.length > 0 ? <BasketForm handleSubmit={handleSubmit} total={<BasketTotal sum={select.sum}/>}/> : <BasketEmpty onClose={callbacks.closeModal}/>}


      </LayoutModal>
    </>
  )
}

export default React.memo(Basket);
