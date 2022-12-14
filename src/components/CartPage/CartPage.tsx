import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartItemsApi";
import { RootState } from "../../redux/store";
import Header from "../Header/Header";
import styles from "./Cartpage.module.scss";
import ItemCart from "./ItemCart/ItemCart";

const CartPage = () => {
  const [state, setState] = useState<number>(0);
  const [submit, setSubmit] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart);
  useEffect(() => {
    let total = 0;
    items.forEach((element: any) => {
      total += element.count * element.regular_price.value;
    });
    setState(total);
  }, [items]);

  const order = () => {
    axios
      .post("https://app.aaccent.su/js/confirm.php", { name, phone })
      .then((res) => {
        // res.data ! CORS
      });
    setSubmit(true);
  };
  const submitFunc = () => {
    dispatch(clearCart());
    setSubmit(false);
  };
  return (
    <div>
      <Header />
      <div className={styles.wrap}>
        <div className={styles.left}>
          {items &&
            items.map((item: any, id: number) => {
              return <ItemCart key={id} item={item} />;
            })}
        </div>
        <div className={styles.right}>
          <p className={styles.total}>total price: {state.toFixed(2)} USD</p>
          <div className={styles.cantact}>
            <input
              className={styles.input}
              type="text"
              placeholder="имя"
              value={name}
              onChange={(e) => setName((prev) => e.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="телефон"
              value={phone}
              onChange={(e) => setPhone((prev) => e.target.value)}
            />
          </div>
          <button onClick={order} className={styles.success}>
            оформить заказ
          </button>
          {submit && (
            <div className={styles.submit}>
              <p>заказ оформлен на имя {name},</p>
              <p>c вами свяжутся по номеру {phone}</p>
              <Link to="/">
                <button onClick={submitFunc} className={styles.success}>
                  OK!
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
