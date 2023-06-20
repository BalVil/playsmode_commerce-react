import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Warranty({ showWarranty }) {
  return (
    <>
      {showWarranty && (
        <Modal variant="modal" closeModal={showWarranty}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showWarranty(false)}
          />
          <ModalTextWrap title={"Warranty"}>
            <p>
              We're pretty sure you'll fall head over heels for our amazing
              novelty items at Leprechaunoti.com! But if you need some
              reassurance, we've got you covered with our super fun warranty.
            </p>
            <p>
              We stand by the quality of our products and provide a no-hassle
              30-day warranty from the date of purchase. If you receive an
              incorrect or damaged item, please notify our customer service
              team, and we will resolve the issue as quickly as a leprechaun can
              find their pot of gold!
            </p>
            <p>
              We no longer cover damage caused by roughhousing or shenanigans,
              so please treat your novelty items with care. We do, however,
              offer a 14-day return policy for unused and unopened items if you
              simply change your mind about a product.
            </p>
            <p>
              Our customer service representatives are always available to
              answer any questions you may have about our warranty or return
              policy. And, like our novelty items, we promise to make it fun and
              playful!
            </p>
            <p>
              So, what are you holding out for? Shop now at Leprechaunoti.com
              and enjoy the festivities!
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Warranty;
