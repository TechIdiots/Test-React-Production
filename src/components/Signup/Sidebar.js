import React, { useState, useEffect} from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import axios from 'axios';
import Input from "./Input";

const Sidebar = () => {
  // const [CountryID, setCountryID] = useState('');
  const [CountryList, setCountryList] = useState([]);
  // const [StateID, setStateID] = useState('');
  // const [StateList, setStateList] = useState([]);
  // const [DistrictID, setDistrictID] = useState('');
  // const [DistrictList, setDistrictList] = useState([]);
  // const [VenueID, setVenueID] = useState('');
  // const [VenueList, setVenueList] = useState([]);
  // const [SL, selectedStateList] = useState([]); 
  // const [DL, selectedDistrictList] = useState([]);
  // const [VL, selectedVenueList] = useState([]);
  // const ID = "";
  useEffect(() => { 
    axios.get('http://developerin.net/StudentMgmt/api/Region/GetRegionDetail')
    .then(response => {
            console.log(response);
            setCountryList(response.data.CountryList);
            // console.log(response.data.CountryList)
            console.log(CountryList);
            // setStateList(response.data.StateList);
            // setDistrictList(response.data.DistrictList);
            // setVenueList(response.data.VenueList);
          })
          .catch(error => {
            console.log("error in GET")
          })
  });

  

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Company <span></span>
        </h3>
      </LogoWrapper>
      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Institute Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confrim Password" />
        <ContainerBox>
          <StyledSelect value="" onChange={(e) => {
            this.setCountryID(e.target.value);
            console.log(e.target.value);
            // this.ID = e.target.value;
            // this.selectedStateList.splice(0,selectedStateList.length)
            // for (var state in setStateList) {
            //   if(this.ID === selectedStateList[state].CountryId){
            //     SL.push({'StateId':selectedStateList[state].StateId,'State':selectedStateList[state].State})
            //   }
            // }
            // console.log(selectedStateList)
            }} required>
            <Option hidden>Country</Option>
            {CountryList.map((item) =>(
                    <Option key={item.CountryId} value={item.CountryId}>
                      {item.Country}
                    </Option>
                  ))}
          </StyledSelect>
          <Status />
        </ContainerBox>
        <ContainerBox>
          <StyledSelect required>
            <Option hidden>State</Option>
            <Option>India</Option>
          </StyledSelect>
          <Status />
        </ContainerBox>
        <ContainerBox>
          <StyledSelect placeholder="District" required>
            <Option hidden>District</Option>
            <Option>India</Option>
          </StyledSelect>
          <Status />
        </ContainerBox>
        <ContainerBox>
          <StyledSelect placeholder="Venue" required>
            <Option hidden>Venue</Option>
            <Option>India</Option>
          </StyledSelect>
          <Status />
        </ContainerBox>
        <button>Sign Up</button>
      </Form>
      <Last>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </Last>
    </Container>
  );
};

const StyledSelect = styled.select`
    border: none;
    width: 100%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }

    ::placeholder{

    }
`;

const Last = styled.div`
    padding: 20px;
`;
const Option = styled.option`
  outline:none;
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledSelect}:focus + & {
    background: #ffa689;
  }
  ${StyledSelect}:invalid + & {
    background: #fe2f75;
  }
  ${StyledSelect}:valid + & {
    background: #70edb9;
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #808080;
  font-weight: 300;
`;

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

const LogoWrapper = styled.div`
  padding-top: 140px;
  
  img {
    height: 6rem;
  }

  h3 {
    color: #ff8d8d;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
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

export default Sidebar;
