import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
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
const MIN_TEXTAREA_HEIGHT = 32;

const ContactPage = () => {
  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <div>
      <MainContainer>
        <ContactWrapper>
          <a href="/">
            {" "}
            <ImgIcon src={HomeIcon} />{" "}
          </a>
          <FormWrapper>
            <Text> </Text>
            <GridRow imgStart={false}>
              <Column1>
                <ContactForm>
                  {/* <Text> Form Design </Text> */}
                  <InputBox>
                    <input type="text" name="" required="required" />
                    <span> Full Name </span>
                  </InputBox>
                  <InputBox>
                    <input type="text" name="" required="required" />
                    <span> Email </span>
                  </InputBox>
                  <InputBox>
                    <textarea
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
                    <input type="submit" name="" value="Send" />
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
