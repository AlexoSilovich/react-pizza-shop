import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'

function Home() {
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryType, setCategoryType] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  })
console.log(categoryType, sortType)
  React.useEffect(() => {
    setIsLoading(true)
    const domen = 'https://62c441bfabea8c085a70c5c3.mockapi.io/items'
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const category = categoryType > 0 ? `category=${categoryType}` : ''
    fetch(`${domen}?${category}&sortBy=${sortBy}&order=${order}`)
      .then(res => res.json())
      .then(req => {
        setItems(req)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
  }, [categoryType, sortType])

  return (
    <>
      <div className="content__top">
        <Categories
          categoryType={categoryType} 
          clickCategory={(i) => setCategoryType(i)} 
        />
        <Sort
          sortType={sortType}
          selectSort={(i) => setSortType(i)} 
        />
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