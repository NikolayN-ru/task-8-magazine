import { FC } from "react";
import { useDispatch } from "react-redux";
import { delItemCart } from "../../../redux/cartItemsApi";
import styles from "./ItemCart.module.scss";

const ItemCart: FC<any> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.wrap}>
      <span>{item.title} </span> - <span>количество {item.count}</span>
      <p>цена {item.regular_price.value}</p>
      <button onClick={() => dispatch(delItemCart(item.id))}>
        удалить товар из корзины
      </button>
    </div>
  );
};

export default ItemCart;
