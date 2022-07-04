import React from 'react'


function Categories() {
  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]

  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => (
          <li 
            key={index} 
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
          >
            {value}
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