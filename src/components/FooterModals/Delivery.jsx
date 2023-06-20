import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Delivery({ showDelivery }) {
  return (
    <>
      {showDelivery && (
        <Modal variant="modal" closeModal={showDelivery}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showDelivery(false)}
          />
          <ModalTextWrap title={"Shipping"}>
            <p>Monday through Friday shipping</p>
            <p>
              "PRIORITY SHIPPING" is your ticket to the front of the line. We
              will pack and ship your order within 24 hours.
            </p>
            <p>
              MOST packages will be delivered within 1-6 days (not including
              Sundays or Holidays).
            </p>
            <p>
              Orders placed after 10 a.m. on Friday will be shipped on Monday.
            </p>
            <p>
              Orders are typically shipped within 1 to 3 days. Then, from the
              time you arrive at the post office, it takes approximately 2 to 8
              days for delivery.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Delivery;
