import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container>
      <Wrapper>
      <Cont>
          <Set>
            Training Categorie
          </Set>
          <Set>
            Training
          </Set>
        </Cont>
        <Cont>
          <Set>
          total members Count
          </Set>
          <Set>
          total Admin Count
          </Set>
        </Cont>
        <Cont>
          <Set>
          total daily attendence graph
          </Set>
          <Set>
          pie chart
          </Set>
        </Cont>
        <Cont>
          <Set>
          submit attendence
          </Set>
          <Set>
          submit payment
          </Set>
        </Cont>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 200px;
	position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
  margin-top: 30px;	
  `;

const Cont = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Set = styled.div`
  max-width: 400px;
  min-width: 250px;
  height: 200px;
  border: none;
  margin: 0.5rem 0;
  margin-right: 40px;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export default Main;
