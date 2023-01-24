import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import Layout from "../../components/layout";
import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Header from "../../components/header";
import Cells from "../../components/cells";
import AboutUs from "../../components/about-us";
import Footer from "../../components/footer";
import {NotificationContainer} from "react-notifications";

function About() {


  const store = useStore();

  const select = useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
  }));

  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => store.get('modals').open('basket'), []),

  };


  const links = [
    {title: "Главная", link: "/"},
    {title: "Магазин", link: "/shop"},
    {title: "О компании", link: "/about"},
  ];


  return (
    <Layout
      upperHead={<h3>Продажа в Мурманской области развлекательной пиротехники лучших российских производителей</h3>}
      head={<Header links={links}/>}
      foot={<Footer/>}>
      <NotificationContainer/>
      <BasketSimple onOpen={callbacks.openModalBasket} amount={select.amount} sum={select.sum}/>
      <AboutUs/>
    </Layout>
  )
}

export default React.memo(About);
