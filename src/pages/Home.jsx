import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { setCategoryType } from '../redux/slices/filterSlice'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
// import Pagination from '../components/Pagination'
import Skeleton from '../components/PizzaBlock/Skeleton'
import { SearchContext } from '../App'

function Home() {
  const dispatch = useDispatch()
  const {categoryType, sortType} = useSelector(state => state.filter)

  const {searchValue} = React.useContext(SearchContext)
  const [items, setItems] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [currentPage, setCurrentPage] = React.useState(1)

  const onChangeCategory = (id) => {
    dispatch(setCategoryType(id))
  }

  React.useEffect(() => {
    
    setIsLoading(true)
    const domen = 'https://62c441bfabea8c085a70c5c3.mockapi.io/items'
    const sortBy = sortType.sortProperty.replace('-', '')
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const search = searchValue ? `&search=${searchValue}` : ''
    
    const category = categoryType > 0 ? `category=${categoryType}` : ''

    fetch(`${domen}?${category}&sortBy=${sortBy}&order=${order}${search}`)
      .then(res => res.json())
      .then(req => {
        setItems(req)
        setIsLoading(false)
      })
      window.scrollTo(0, 0)
  }, [categoryType, sortType, searchValue, currentPage])

  const pizzas = items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
  
  const skeleton = [...new Array(6)].map((_, ind) => <Skeleton key={ind} />)

  return (
    <>
      <div className="content__top">
        <Categories
          categoryType={categoryType} 
          onChangeCategory={onChangeCategory} 
        />
        <Sort />
      </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading ? skeleton : pizzas}
      </div>
      {/* <Pagination onChangePage={num => setCurrentPage(num)} /> */}
    </>
  )
}

export default Home