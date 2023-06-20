import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Return({ showReturn }) {
  return (
    <>
      {showReturn && (
        <Modal variant="modal" closeModal={showReturn}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showReturn(false)}
          />
          <ModalTextWrap title={"Return"}>
            <p>
              If you wish to return an item or your entire order, we will deduct
              the shipping charges from your refund.
            </p>
            <p>Items must be brand new and unopened.</p>
            <p>Items can be returned within 30 days.</p>
            <p>
              Returns and refunds will be processed within 7 days of the items
              being received.
            </p>
            <p>
              Please contact us via email (support@leprechaunoti.com) before
              returning.
            </p>
            <p>
              If we make an error or the tracking indicates an issue that is our
              fault, please contact us and we will investigate and refund you as
              needed. support@leprechaunoti.com.
            </p>
            <p>The package did not arrive:</p>
            <p>
              If the package arrives and is marked delivered by your carrier,
              please contact them to inquire about a possible mistaken delivery.
              We frequently find that these packages arrive within a few days of
              being marked "delivered." If you have any problems, please let us
              know. Please keep in mind that if the package is marked
              "delivered," we are no longer responsible for it, but we are happy
              to assist in locating it.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Return;
