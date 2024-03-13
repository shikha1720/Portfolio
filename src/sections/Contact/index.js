import React, { useRef } from "react";
import "./style.css";
import Container from "../../components/Container/Container";
import Wapper from "../../components/Wapper/Wapper";
import { Heading, SubHeading } from "../../components/SectionHeading/SectionHeading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";


const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h55avqm",
        "template_ykilvpd",
        form.current,
        "-zlUM_zGrhuKeKdsS"
      )
      .then(
        (result) => {
          toast.success("Your Message send successfully!");
          console.log(result.text);
        },
        (error) => {
          toast.error("Something Went Wrong. Message not send.");

          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">

    <Container>
      <Wapper>
        <Heading heading="Contact" />
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="contact-title">Email Me 🚀</div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="user_name"
            className="contact-input"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            name="user_email"
            className="contact-input"
            required
          />
          <input
            type="text"
            placeholder="Write Subject Here"
            name="subject"
            className="contact-input"
            required
          />
          <textarea
            placeholder="Message"
            name="message"
            className="contact-input"
            rows={3}
            required
          />
          <button className="contact-submitBtn">Send</button>
        </form>
        

      </Wapper>
    </Container>
    </div>
  );
};

export default Contact;