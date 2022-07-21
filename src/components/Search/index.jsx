import React from 'react'
import { SearchContext } from '../../App'
import search from './search.svg'
import close from './close.svg'
import styles from './Search.module.scss'

function Search() {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)

  return (
    <div className={styles.root}>
      <img className={styles.search} src={search} alt="search" />
      <input 
        value={searchValue}
        placeholder='Пепперони...' 
        type="text" 
        className={styles.input}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && 
        <img 
          className={styles.close} 
          src={close} 
          alt="close" 
          onClick={() => setSearchValue('')} 
        />
      }
    </div>
  )
}

export default Search