import React from 'react'
import styles from './NotFoundBlock.module.scss'

function NotFoundBlock() {
  return (
    <div className={styles.wrapper}>
      <h1>Ничего не найдено :(</h1>
      <p>Что-то пошло не так</p>
    </div>
  )
}

export default NotFoundBlock