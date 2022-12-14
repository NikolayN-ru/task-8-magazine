import React from "react";
import styles from "./Header.module.scss";
import Cart from "../Icons/Cart/Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.wrap}>
      <Link to="/" className={styles.header}>Страница товаров</Link>
      <Link to="/cart">
        {" "}
        <Cart />
      </Link>
    </div>
  );
};

export default Header;
