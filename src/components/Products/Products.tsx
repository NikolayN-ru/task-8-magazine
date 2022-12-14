import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Menu from "../Menu/Menu";
import Modal from "../Modal/Modal";
import Item from "./Item/Item";
import styles from "./Products.module.scss";

const Products = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [dataModal, setDataModal] = useState<any>({});
  const [pagination, setPagination] = useState<number>(6);
  const products = useSelector((state: RootState) => state.counter.products);
  const brands = useSelector((state: RootState) => state.brandsActive);

  useEffect(() => {
    setPagination(6);
  }, [products]);

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const setData = (data: any) => {
    setDataModal(data);
  };

  const prevPage = () => {
    if (pagination > 6) {
      setPagination((prev) => prev - 6);
    }
  };

  const nextPage = () => {
    if (pagination < products.length) {
      setPagination((prev) => prev + 6);
    }
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <Menu />
        <div className={styles.products}>
          {products &&
            products.map((item: any, index: number) => {
              if (index < pagination && index >= pagination - 6) {
                return !brands[0]?.length ? (
                  <Item
                    key={index}
                    item={item}
                    toggleModal={toggleModal}
                    setData={setData}
                  />
                ) : (
                  brands[0].includes(item.brand) && (
                    <Item
                      key={index}
                      item={item}
                      toggleModal={toggleModal}
                      setData={setData}
                    />
                  )
                );
              }
            })}
        </div>
        <div>
          {modal && <Modal data={dataModal} toggleModal={toggleModal} />}
        </div>
      </div>
      <div>
        {pagination > 6 && (
          <button className={styles.pagination} onClick={prevPage}>
            {"< < <"} предыдущая страница
          </button>
        )}
        {pagination < products.length && (
          <button className={styles.pagination} onClick={nextPage}>
            следующая страница {"> > >"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
