import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemCart } from "../../redux/cartItemsApi";
import styles from "./Modal.module.scss";

interface idata {
  data: {
    id: number;
    title: string;
    brand: string;
    image: string;
    regular_price: any;
    sku: string;
    type: string;
  };
  toggleModal: () => void;
}

const Modal: FC<idata> = ({ data, toggleModal }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const addCart = () => {
    dispatch(addItemCart({ ...data, count: count }));
    toggleModal();
  };
  const { title, brand, image, regular_price, sku, type } = data;

  const dec = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={image} width="340" />
      </div>
      <div className={styles.right}>
        <button onClick={toggleModal} className={styles.close}>
          close
        </button>
        <p>{title}</p>
        <p>number-brand-{brand}</p>
        <p>{sku}</p>
        <p>{type}</p>
        <p>
          {regular_price.value} {regular_price.currency}
        </p>
        <hr />
        <div className={styles.countItem}>
          <button onClick={dec} className={styles.btnCount}>
            -
          </button>
          <p>{count}</p>
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className={styles.btnCount}
          >
            +
          </button>
        </div>
        <hr />
        <button onClick={addCart} className={styles.success}>
          add cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
