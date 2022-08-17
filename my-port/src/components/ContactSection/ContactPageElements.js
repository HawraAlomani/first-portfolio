import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Encode Sans Expanded", sans-serif;
  background: #232029;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: auto;
  position: relative;
  z-index: 0;
`;

export const ContactWrapper = styled.div`
  z-index: 1;
  height: 1200px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  text-align: center;
`;
export const Text = styled.h1`
  font-size: 34px;
  color: gray;
`;
export const ImgIcon = styled.img`
  width: 40px;
  margin-top: 30px;
  padding-bottom: 4px;
  float: left;
  &:hover {
    border-bottom: 2px solid white;
  }
`;
export const FormWrapper = styled.div`
  margin-top: 170px;
  height: auto;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
  /* border: 1px solid white; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ContactImg = styled.img`
  width: 500px;
`;

export const GridRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ContactForm = styled.div`
  width: 100%;
  padding: 40px;
  background: #fff;
`;
export const InputBox = styled.div`
 font-family: "Encode Sans Expanded", sans-serif;
  position: relative;
  width: 100%;
  margin-top: 10px;
  input,
  textarea {
    font-family: "Encode Sans Expanded", sans-serif;
    width: 100%;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    border: none;
    border-bottom: 2px solid #333;
    outline: none;
    resize: none;
  }
  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 16px;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }
  .max{
    margin: -15px 0;
    font-size: 11px;
    bottom: 0;
  }
  textarea:focus ~ .max {
    color: #666;
    font-size: 11px;
    transform: translateY(0px);
  }
  textarea:valid ~ .max {
    color: #666;
    font-size: 11px;
    transform: translateY(0px);
  }
  
  input:focus ~ span {
    color: #a58cf5;
    font-size: 12px;
    transform: translateY(-20px);
  }
  input:valid ~ span {
    color: #a58cf5;
    font-size: 12px;
    transform: translateY(-20px);
  }
  textarea:focus ~ span {
    color: #a58cf5;
    font-size: 12px;
    transform: translateY(-20px);
  }
  textarea:valid ~ span {
    color: #a58cf5;
    font-size: 12px;
    transform: translateY(-20px);
  }
  input[type="submit"] {
    width: 100px;
    cursor: pointer;
    border-radius: 50px;
    background: #47aa90;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      transition: all 0.2s ease-in-out;
      background: #8ed3bd;
      color: white;
    }
  }
`;
