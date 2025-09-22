import React from "react";
import styled from "styled-components";
import { Link } from "react-router";

function Footer() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      
      <Content>
          <H4>Contact us on</H4>
          <Link to="https://wa.me/919876543210"><Img src="..\src\assets\whatsapp-logo.png" alt="Whatsapp"/></Link>
            <Link to="https://www.instagram.com/"><Img src="..\src\assets\instagram-logo.png" alt="Instagram" /></Link>
          <Link to="https://www.facebook.com/"><Img src="..\src\assets\facebook-logo.png" alt="Facebook" /></Link>
          
        </Content>
      <Foot>
        <div>
          <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads </p>
          <p>© 2025, SafeNex, Inc. or its affiliates</p>
        </div>
        <Sep></Sep>
        <p>Developed by Rishabh Das</p>
      </Foot>
      <BTT onClick={toTop}>Back to top</BTT>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  bottom: 0;
  background-color: #232f3f;
`;

const H4 = styled.h4`
font-size: 30px !important;
`

const Img = styled.img`
height: 50px;
width: 50px`

const BTT = styled.div`
  width: 100%;
  border: none;
  border-radius: 0px;
  background-color: #364759;
  color: #f4fafd;
  font-size: 14px;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #485768;
  }
`;

const Content = styled.div`
  background-color: #232f3f;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  padding-left: 70px;
  padding-right: 80px;
  padding-bottom: 40px;

  h4 {
    font-size: 16px;
    color: #f2fffb;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #c7ccde;
    margin-bottom: 10px;
    line-height: 16.8px;
  }
`;

const Foot = styled.div`
  background-color: #131a22;
  color: rgb(221, 221, 221);
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 12px;
    margin-bottom: 10px;
  }

  p {
    padding-bottom: 5px;
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgb(221, 221, 221);
  margin-left: 30px;
  margin-right: 30px;
`;
export default Footer;