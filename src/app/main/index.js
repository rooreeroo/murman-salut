import BasketSimple from "../../components/basket-simple";
import List from "../../components/list";
import Layout from "../../components/layout";
import React, {useCallback, useEffect} from "react";
import Item from "../../components/item";
import useStore from "../../utils/use-store";
import useSelector from "../../utils/use-selector";
import Header from "../../components/header";
import Cells from "../../components/cells";
import Select from "../../components/select/Select";
import Pagination from "../../components/pagination";
import CatItem from "../../components/category-item";
import Footer from "../../components/footer";
import {NotificationContainer} from "react-notifications";

function Main() {


  const store = useStore();

  useEffect(() => {
    store.get('catalog').load();
    store.get('catalog').loadCat()


  }, []);


  const select = useSelector(state => ({
    items: state.catalog.pItems,
    amount: state.basket.amount,
    sum: state.basket.sum,
    count: state.catalog.params?.count,
    page: state.catalog.params?.page,
    limit: state.catalog.params?.limit,
    categories: state.catalog.categories,
  }));


  const callbacks = {
    // Открытие корзины
    openModalBasket: useCallback(() => store.get('modals').open('basket'), []),
    // Добавление в корзину
    addToBasket: useCallback(_id => store.get('basket').addToBasket(_id), []),
    //sort
    onSort: useCallback(cat => store.get('catalog').sort(cat, {page: 1}), []),
    //Paginate
    onPaginate: useCallback(page => store.get('catalog').setParams({page}), []),
  };

  const renders = {
    item: useCallback(item => <Item item={item} onAdd={callbacks.addToBasket}/>, []),
    catItem: useCallback(item =><CatItem item={item} onAdd={callbacks.addToBasket}/>, [])
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
      <Select options={select.categories} value={undefined} onChange={callbacks.onSort} />
      <Cells/>
      <List items={select.items} renderItem={renders.item} renderCatItem={renders.catItem}/>
      {/*{select.count > 100 ? <Pagination count={select.count} page={select.page} limit={select.limit} onChange={callbacks.onPaginate}/> : null}*/}
    </Layout>
  )
}

export default React.memo(Main);
