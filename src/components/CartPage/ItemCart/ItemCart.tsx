import { FC } from 'react'
import styles from './ItemCart.module.scss';

const ItemCart:FC<any> = ({item}) => {
  return (
    <div className={styles.wrap}>
        <span>{item.title} </span> - 
        <span> {item.regular_price.value}</span>
    </div>
  )
}

export default ItemCart