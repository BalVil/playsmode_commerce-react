import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function Contact({ showContact }) {
  return (
    <>
      {showContact && (
        <Modal variant="modal" closeModal={showContact}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showContact(false)}
          />
          <ModalTextWrap title={"Contact us"}>
            <p>
              We're always happy to help, so please don't hesitate to contact us
              if you have any questions or concerns.
            </p>
            <p>Please contact us at the following address:</p>
            <p>
              Business Park, Unit 45 Lister Cl, Plympton, Plymouth PL3 5BA, UK
              support@starburstmania.com
            </p>
            <p>+447724372562</p>
            <p>
              We will do everything possible to address your concerns in a
              timely and satisfactory manner. If you are dissatisfied with our
              response, you have the option of filing a complaint with the
              appropriate data protection authority.
            </p>
            <p>We can't wait to hear from you!</p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Contact;
