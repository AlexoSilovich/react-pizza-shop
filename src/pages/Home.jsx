import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

function Home() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://62c441bfabea8c085a70c5c3.mockapi.io/items')
      .then(res => res.json())
      .then(req => {
        setItems(req)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading 
            ? [...new Array(6)].map((_, ind) => <Skeleton key={ind} />)
            : items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
          }
      </div>
    </>
  )
}

export default Home