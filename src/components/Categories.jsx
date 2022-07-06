import React from 'react'


function Categories({categoryType, clickCategory}) {
  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]

  // const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            // onClick={() => setActiveIndex(index)}
            onClick={() => clickCategory(index)}
            className={categoryType === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
      {/* <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Вегетарианские</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul> */}
    </div>
  )
}

export default Categories