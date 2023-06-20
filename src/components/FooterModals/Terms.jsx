import Modal from "components/Modal";
import ButtonClose from "components/ButtonClose";
import ModalTextWrap from "components/ModalTextWrap";

function TermsModal({ showTerms }) {
  return (
    <>
      {showTerms && (
        <Modal variant="modal" closeModal={showTerms}>
          <ButtonClose
            aria-label={"close"}
            type={"button"}
            onClick={() => showTerms(false)}
          />
          <ModalTextWrap title="Terms">
            <p>
              Orders are typically shipped within 1 to 3 days. Then, from the
              time you arrive at the post office, it takes approximately 2 to 8
              days for delivery.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you
              engage in our "Service" and agree to be bound by the following
              terms and conditions ("Terms of Service", "Terms"). These Terms of
              Service apply to all users of the site, including but not limited
              to browsers, vendors, customers, merchants, and/or content
              contributors.
            </p>
            <p>
              Please carefully read these Terms of Service before accessing or
              using our website. You agree to be bound by these Terms of Service
              by accessing or using any part of the site. You may not access the
              website or use any services if you do not agree to all of the
              terms and conditions of this agreement. Acceptance is expressly
              limited to these Terms of Service if these Terms of Service are
              considered an offer.
            </p>
            <p>
              Any new features or tools added to the current store will be
              subject to the Terms of Service as well. The most recent version
              of the Terms of Service can be found on this page at any time. By
              posting updates and/or changes to our website, we reserve the
              right to update, change, or replace any part of these Terms of
              Service. It is your responsibility to check this page for updates
              on a regular basis. Your continued use or access to the website
              after any changes are posted constitutes acceptance of those
              changes.
            </p>
            <p>TERMS AND CONDITIONS OF AN ONLINE STORE</p>
            <p>
              By agreeing to these Terms of Service, you represent that you are
              at least the legal age of majority in your state or province of
              residence, or that you are the legal age of majority in your state
              or province of residence and have given us permission to allow any
              of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized
              purpose, and you may not violate any laws in your jurisdiction by
              using the Service (including but not limited to copyright laws).
            </p>
            <p>
              You are not permitted to send any worms, viruses, or destructive
              code.
            </p>
            <p>
              Any violation of the Terms will result in the immediate
              termination of your Services.
            </p>
            <p>OVERALL CONDITIONS</p>
            <p>
              We reserve the right to refuse service to anyone at any time for
              any reason.
            </p>
            <p>
              You acknowledge that your content (excluding credit card
              information) may be transferred unencrypted and may involve (a)
              transmissions over various networks and (b) changes to conform and
              adapt to technical requirements of connecting networks or devices.
              Credit card information is always encrypted during network
              transfer.
            </p>
            <p>
              Without our express written permission, you agree not to
              reproduce, duplicate, copy, sell, resell, or exploit any portion
              of the Service, use of the Service, or access to the Service or
              any contact on the website through which the service is provided.
            </p>
            <p>
              The headings in this agreement are included for convenience only
              and have no bearing on the Terms.
            </p>
            <p>CHANGES TO THE SERVICE AND PRICES</p>
            <p>Our product prices are subject to change without notice.</p>
            <p>
              We reserve the right to modify or discontinue the Service (or any
              part or content thereof) at any time and without notice.
            </p>
            <p>
              We will not be liable to you or any third party if the Service is
              modified, priced, suspended, or discontinued.
            </p>
            <p>INFORMATION ABOUT YOU</p>
            <p>
              Our Privacy Policy governs your submission of personal information
              through the store.
            </p>
            <p>WARRANTY EXCLUSION; LIMITATION OF LIABILITY</p>
            <p>
              We make no guarantees, representations, or warranties that your
              use of our service will be continuous, timely, secure, or
              error-free.
            </p>
            <p>
              We do not guarantee that the results obtained from using the
              service will be accurate or reliable.
            </p>
            <p>
              You agree that we may discontinue the service for indefinite
              periods of time or cancel it at any time without prior notice to
              you.
            </p>
            <p>THE ENTIRE AGREEMENT</p>
            <p>
              We shall not be deemed to have waived any right or provision of
              these Terms of Service if we fail to exercise or enforce such
              right or provision.
            </p>
            <p>
              These Terms of Service, as well as any policies or operating rules
              posted by us on this site or in relation to The Service, represent
              the entire agreement and understanding between you and us and
              govern your use of the Service, superseding any prior or
              contemporaneous agreements, communications, and proposals, whether
              oral or written, between you and us (including, but not limited
              to, any prior versions of the Terms of Service).
            </p>
            <p>
              Any ambiguities in the interpretation of these Terms of Service
              shall not be held against the party who drafted them.
            </p>
            <p>TERMS OF SERVICE CHANGES</p>
            <p>
              The most recent version of the Terms of Service can be found on
              this page at any time.
            </p>
            <p>
              We reserve the right to update, change, or replace any part of
              these Terms of Service at our sole discretion by posting updates
              and changes to our website. It is your responsibility to check our
              website for changes on a regular basis. Your continued use or
              access to our website or the Service after any changes to these
              Terms of Service are posted constitutes acceptance of those
              changes.
            </p>
            <p>INFORMATION ON CONTACT</p>
            <p>
              If you have any questions about the Terms of Service, please
              contact us at support@leprechaunoti.com.
            </p>
          </ModalTextWrap>
        </Modal>
      )}
    </>
  );
}

export default TermsModal;
