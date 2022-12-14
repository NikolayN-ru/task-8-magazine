import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { brandAdded, resetBrand } from "../../redux/brandActive";
import { RootState } from "../../redux/store";
import styles from "./Menu.module.scss";

const Menu = () => {
  const brands = useSelector((state: RootState) => state.brands.brands);
  const [state, setState] = useState<String[]>([]);
  const dispatch = useDispatch();

  const change = (id: any) => {
    if (state.includes(id)) {
      setState((prev) => {
        const candidate = prev.filter((item) => item !== id);
        return candidate;
      });
    } else {
      setState((prev) => [...prev, id]);
    }
  };

  return (
    <div>
      <p className={styles.title}>Бренды</p>
      {brands &&
        brands.map((brand: any, index: number) => (
          <div key={brand.code}>
            <div className={styles.wrapInput}>
              <input
                id={brand.code}
                type="checkbox"
                name={brand.code}
                // checked={false}
                onChange={() => change(brand.id)}
              />
              <label htmlFor={brand.code} className={styles.labelItem}>
                {brand.code}
              </label>
            </div>
          </div>
        ))}
      <div className={styles.btnBlock}>
        <button
          className={styles.success}
          onClick={() => dispatch(brandAdded(state))}
        >
          применить
        </button>
        <button
          className={styles.reset}
          onClick={() => {
            dispatch(resetBrand());
          }}
        >
          Х сбросить
        </button>
      </div>
    </div>
  );
};

export default Menu;
