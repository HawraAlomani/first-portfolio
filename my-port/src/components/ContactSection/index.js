import React, { useState, useRef } from "react";
import {
  MainContainer,
  ContactWrapper,
  Text,
  ImgIcon,
  FormWrapper,
  ContactImg,
  ContactForm,
  GridRow,
  Column1,
  Column2,
  InputBox,
} from "./ContactPageElements";
import HomeIcon from "../images/home.png";
import Contactimage from "../images/ContactImage-2.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MIN_TEXTAREA_HEIGHT = 32;

const ContactPage = () => {
  //Text Area expanding
  const textareaRef = useRef(null);
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
    setMsg(event.target.value);
  };

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  //Email JS
  const form = useRef();
  //clear form when submitting
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5cs2czj",
        "template_wm6jzef",
        form.current,
        "8f9uGQK_ra6reHQBT"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    //clear input values
    setFullName("");
    setEmail("");
    setValue("");
  };
  // Showing a message
  const notify = () => {
    toast.success("Your message was sent successfully 😀");
  };

  return (
    <div>
      <MainContainer>
        <ContactWrapper>
          <a href="/">
            {" "}
            <ImgIcon src={HomeIcon} />{" "}
          </a>
          <ToastContainer />
          <FormWrapper>
            <Text> </Text>
            <GridRow imgStart={false}>
              <Column1>
                <ContactForm ref={form} onSubmit={sendEmail}>
                  {/* <Text> Form Design </Text> */}
                  <InputBox>
                    <input
                      type="text"
                      name="user_name"
                      required="required"
                      onChange={(event) => setFullName(event.target.value)}
                      value={fullName}
                    />
                    <span> Full Name </span>
                  </InputBox>
                  <InputBox>
                    <input
                      type="text"
                      name="user_email"
                      required="required"
                      onChange={(event) => setEmail(event.target.value)}
                      value={email}
                    />
                    <span> Email </span>
                  </InputBox>
                  <InputBox>
                    <textarea
                      name="message"
                      required="required"
                      onChange={onChange}
                      ref={textareaRef}
                      style={{
                        minHeight: MIN_TEXTAREA_HEIGHT,
                        resize: "none",
                      }}
                      value={value}
                      maxLength={500}
                    ></textarea>
                    <span> Type your Message... </span>
                    <span className="max"> max 500 characters </span>
                  </InputBox>
                  <InputBox>
                    <input type="submit" value="Send" onClick={notify} />
                  </InputBox>
                </ContactForm>
              </Column1>

              <Column2>
                <ContactImg src={Contactimage} />
              </Column2>
            </GridRow>
          </FormWrapper>
        </ContactWrapper>
      </MainContainer>
    </div>
  );
};

export default ContactPage;
