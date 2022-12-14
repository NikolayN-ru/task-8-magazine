import React, { FC, useState } from "react";
import Modal from "../../Modal/Modal";
import styles from "./Item.module.scss";
const Item: FC<any> = ({ item, toggleModal, setData }) => {
  const changeDataModal = () => {
    setData(item);
    toggleModal();
  };

  const { title, image, regular_price, brand } = item;

  return (
    <div className={styles.wrapper} onClick={changeDataModal}>
      <p>{title}</p>
      <img src={image} width="140" />
      <p>
        {regular_price.value} {regular_price.currency}
      </p>
      <p>brand - {brand}</p>
    </div>
  );
};

export default Item;
