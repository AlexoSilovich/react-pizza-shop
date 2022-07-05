import React from "react";
import axios from "axios";
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'

import './scss/app.scss'

function App() {
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://62c441bfabea8c085a70c5c3.mockapi.io/items')
      .then(res => res.json())
      .then(req => setItems(req))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map(obj => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
