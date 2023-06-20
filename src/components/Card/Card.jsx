import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

function Card({ item }) {
  return (
    <Link to={`/product/${item?.id}`} className={styles.card}>
      <ul className={styles.cardImage}>
        {item?.isNew && <span className={styles.option}>New</span>}
        <li>
          <img
            src={item?.image}
            alt={item?.title}
            className={styles.mainImage}
          />
        </li>
        <li>
          <img
            src={item?.image2}
            alt={item?.title}
            className={styles.secondImage}
          />
        </li>
      </ul>
      <div className={styles.desc}>
        <h2 className={styles.title}>
          {item?.title}
          {/* {item?.title?.substring(0, 30)} */}
        </h2>
        <ul className={styles.priceList}>
          {item?.oldPrice && (
            <li className={styles.oldPrice}>{item?.oldPrice}€</li>
          )}
          <li className={styles.price}>Price: {item?.price}€</li>
        </ul>
      </div>
    </Link>
  );
}

export default Card;
