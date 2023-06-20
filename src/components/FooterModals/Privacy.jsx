import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap/ModalTextWrap";

function Privacy({ showPrivacy }) {
  return (
    <>
      {showPrivacy && (
        <Modal variant="modal" closeModal={showPrivacy}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showPrivacy(false)}
          />
          <ModalTextWrap title={"Privacy"}>
            <p>
              This Privacy Statement explains how we collect, use, and share
              your personal information when you visit or make a purchase from
              Leprechaunoti.com (the "Site").
            </p>
            <p>We collect personal information.</p>
            <p>
              We automatically collect certain information about your device
              when you visit the Site, such as information about your web
              browser, IP address, time zone, and some of the cookies that are
              installed on your device. Furthermore, as you navigate the Site,
              we collect information about the individual web pages or products
              that you view, what websites or search terms referred you to the
              Site, and how you interact with the Site. This automatically
              collected data is referred to as "Device Information."
            </p>
            <ul>
              We collect Device Information through the use of the following
              technologies:
              <li>
                "Cookies" are data files that are stored on your device or
                computer and frequently contain an anonymous unique identifier.
              </li>
              <li>
                "Log files" track Site activity and collect information such as
                your IP address, browser type, Internet service provider,
                referring/exit pages, and date/time stamps.
              </li>
              <li>
                "Web beacons," "tags," and "pixels" are electronic files that
                record information about your interactions with the Site.
              </li>
            </ul>
            <p>
              Furthermore, when you make or attempt to make a purchase through
              the Site, we collect certain information from you, such as your
              name, billing address, shipping address, payment information
              (including credit card numbers), email address, and phone number.
              This is referred to as "Order Information."
            </p>
            <p>
              In this Privacy Policy, we refer to "Personal Information" as both
              Device Information and Order Information.
            </p>
            <p>What do we do with your personal information?</p>
            <p>
              We use the Order Information we collect in general to fulfill any
              orders placed through the Site (including processing your payment
              information, arranging shipping, and sending you invoices and/or
              order confirmations). Furthermore, we use this Order Information
              to:
            </p>
            <ul>
              <li>Interact with you;</li>
              <li>Examine our orders for possible risk or fraud; and</li>
              <li>
                Provide you with information or advertising about our products
                or services based on the preferences you have shared with us.
              </li>
            </ul>
            <p>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (specifically, your IP address), as
              well as to improve and optimize our Site more broadly (for
              example, by generating analytics about how our customers browse
              and interact with the Site, and to assess the success of our
              marketing and advertising campaigns).
            </p>
            <p>
              We use devise information for advertising relating to our products
              or services when it is consistent with the preferences you have
              shared with us.
            </p>
            <p>Your legal rights</p>
            <p>
              If you are a European resident, you have the right to request
              access to your personal information and to have it corrected,
              updated, or deleted. If you wish to exercise this right, please
              contact us using the information provided below.
            </p>
            <p>
              Further to that, if you are a European resident, please be aware
              that we are processing your information in order to fulfill
              contracts we may have with you (for example, if you place an order
              through the Site) or to pursue our legitimate business interests
              listed above. Please keep in mind that your information will be
              transferred outside of Europe.
            </p>
            <p>Data storage</p>
            <p>
              When you place an order through the Site, we will keep your Order
              Information for our records unless and until you request that we
              delete it.
            </p>
            <p>Changes</p>
            <p>
              We may update this privacy statement from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons.
            </p>
            <p>Get in touch with us</p>
            <p>
              If you would like more information about our privacy practices,
              have questions, or wish to file a complaint, please contact us via
              email at support@leprechaunoti.com.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default Privacy;
