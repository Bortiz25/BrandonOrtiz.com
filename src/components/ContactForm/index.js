import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

/* 
this portion will render the contact form
will include logic for handling the submission of the
contact form directed to personal email "ortizbrandon140@gmail.com"
*/

const ContactForm = () => {
  // emailjs code to send messages directly to gmail inbox
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init({
      publicKey: "57h09ZPAY_ac2YNI7",
    });

    emailjs.sendForm("service_duz6qn3", "template_kbhbezn", form.current).then(
      () => {
        console.log("SUCCESS");
      },
      (error) => {
        console.log("FAILED", error.text);
      }
    );
  };

  return (
    <main className={styles.main}>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
};

export default ContactForm;
