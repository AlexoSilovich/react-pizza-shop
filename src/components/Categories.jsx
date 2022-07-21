import React from 'react'


function Categories({categoryType, onChangeCategory}) {
  const categories = ["Все", "Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"]

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            onClick={() => onChangeCategory(index)}
            className={categoryType === index ? 'active' : ''}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories