import React, {useEffect, useState} from 'react';
import Main from "./main";
import Basket from "./basket";
import useStore from "../utils/use-store";
import useSelector from "../utils/use-selector";
import {Routes, Route} from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";

/**
 * Приложение
 * @return {React.ReactElement} Виртуальные элементы React
 */
function App() {


  const modal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path={'/shop'} element={<Main/>}/>
        <Route path={"/about"} element={<About/>}/>
        <Route path={"/contacts"} element={<Contacts/>}/>
        <Route path={""} element={<Contacts/>}/>
      </Routes>
      {modal === 'basket' && <Basket/>}
    </>
  );
}

export default React.memo(App);
