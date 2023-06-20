import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import styles from "./Payment.module.scss";
import Modal from "components/Modal/Modal";
import PaymentForm from "components/PaymentForm";

function Payment({ showPayment, total, products }) {
  return (
    <Modal closeModal={showPayment} variant="payment">
      <div className={styles.wrap}>
        <div className={styles.left}>
          <div className={styles.headerLink}>
            <a
              href="#"
              onClick={() => showPayment(false)}
              className={styles.link}
            >
              <ArrowLeftOutlinedIcon />
              Back
            </a>
          </div>

          <div className={styles.summary}>
            <p>Total for payment:</p>
            <span className={styles.summaryValue}>{total}€</span>
            <div className={styles.info}>
              <ol>
                {products?.map(({ title, id }) => (
                  <li className={styles.summaryName} key={id}>
                    {title}
                    Hello
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.checkoutHeader}>Pay with card</div>
          <PaymentForm showPayment={showPayment} />
        </div>
      </div>
    </Modal>
  );
}

export default Payment;
