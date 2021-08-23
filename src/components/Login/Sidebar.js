import React, { Component } from "react";
import styled from "styled-components";
import Input from "./Input";

class Sidebar extends Component {
  
render(){

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70edb9;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Container = styled.div`
  overflow-x: hidden;
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

  return (
    <Container>
      <Form>
        {/* <h3>Sign In</h3> */}
        {/* <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" /> */}
        <Input></Input>
        <button>Sign In</button>
        <button>Sign In</button>
        <button>Sign In</button>
        <button>Sign In</button>
        <button>Sign In</button>
        <button>Sign In</button>
        <button style={{backgroundColor:'crimson'}}>LOGOUT</button>
      </Form >
    </Container>
  );
  }
};


export default Sidebar;
