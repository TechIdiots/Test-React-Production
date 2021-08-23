import React, {Component} from "react";
import styled from "styled-components";
import logo from "../Assets/logo.svg";
import axios from 'axios';
import Input from "./Input";

class Sidebar extends Component{
  constructor(props) {
    super(props)
    this.ID = "";
    this.instName= "";
    this.instEmail= "";
    this.instPass= "";
    this.intConPass= "";
    this.state = {
      countryList: [],
      stateList: [],
      districtList: [],
      venueList: [],
      SL: [],
      DL: [],
      VL: [],
      ctry: "",
      ctryID: "",
      ste: "",
      steID: "",
      dict: "",
      dictID: "",
      vnue: "",
      vnueID: "",
      
      showModel: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCountry = this.handleCountry.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleDistrict = this.handleDistrict.bind(this);
    this.handleVenue = this.handleVenue.bind(this);
  }

  componentDidMount() {
    axios.get('http://developerin.net/StudentMgmt/api/Region/GetRegionDetail')
      .then(response => {
        console.log(response);
        this.setState({ countryList: response.data.CountryList});
        this.setState({ stateList: response.data.StateList});
        this.setState({ districtList: response.data.DistrictList})
        this.setState({ venueList: response.data.VenueList})
      })
      .catch(error => {
        console.log("error in GET")
      })
  }

  async handleCountry(event) {
    this.setState({ SelectedCountryID: event.target.value});
    this.ID = event.target.value;
    for (var country in this.state.countryList){
      if(this.ID ===this.state.countryList[country].CountryId){
        this.setState({ctry : this.state.countryList[country].Country})
        this.setState({ctryID : this.state.countryList[country].CountryId})

      }
    }
    this.state.SL.splice(0,this.state.SL.length)
    for (var state in this.state.stateList){
      if(this.ID === this.state.stateList[state].CountryId){
        this.state.SL.push({'StateId':this.state.stateList[state].StateId,'State':this.state.stateList[state].State})
      }
    }
    
  }

  async handleState(event) {
    this.setState({ SelectedStateID: event.target.value}); 
    this.ID = event.target.value;
    for (var state in this.state.stateList){
      if(this.ID === this.state.stateList[state].StateId){
        this.setState({ste : this.state.stateList[state].State})
        this.setState({steID : this.state.stateList[state].StateId})
      }
    }
    this.state.DL.splice(0,this.state.DL.length)
    for (var district in this.state.districtList){
      if (this.ID === this.state.districtList[district].StateId){
        this.state.DL.push({'DistrictId':this.state.districtList[district].DistrictId,'District':this.state.districtList[district].District})
      }
    }
  }

  async handleDistrict(event) {
    this.setState({ SelectedDistrictID: event.target.value}); 
    this.ID = event.target.value;
    for (var district in this.state.districtList){
      if (this.ID === this.state.districtList[district].DistrictId){
        this.setState({dict :this.state.districtList[district].District})
        this.setState({dictID :this.state.districtList[district].DistrictId})
      }
    }
    this.state.VL.splice(0,this.state.VL.length)
    for (var venue in this.state.venueList){
      if (this.ID === this.state.venueList[venue].DistrictId){
        this.state.VL.push({'VenueId':this.state.venueList[venue].VenueId,'Venue':this.state.venueList[venue].Venue})
      }
    }
  }

  async handleVenue(event) {
    this.setState({ SelectedVenueID: event.target.value});
    this.ID = event.target.value;
    for (var venue in this.state.venueList){
      if (this.ID === this.state.venueList[venue].VenueId){
        this.setState({vnue :this.state.venueList[venue].Venue})
        this.setState({vnueID :this.state.venueList[venue].VenueId})
      }
    }
  }

  handleName({ e }) {
    this.instName = e.value;
  }
  handleEmail({ e }) {
    this.instEmail = e.value;
  }
  handlePass({ e }) {
    this.instPass = e.value;
  }
  handleConPass({ e }) {
    this.ConPass = e.value;
  }
  // handleName({ e }) {
  //   e.value = this.instName;
  // }
  handleSubmit = (event) => {
    console.log("submitted")
    console.log(this.instName+","+
    this.instEmail+","+
    this.instPass+","+
    this.intConPass)
    if(this.instPass === this.instConPass)
      console.log("password same")
    // axios.post('http://developerin.net/StudentMgmt/api/Institute/SaveInstituteDetail', {
    //   "InstituteName": "Institutetwo",
    //   "Address": "AddressTwo",
    //   "CountryDetailId": this.state.ctryID,
    //   "StateDetailId": this.state.steID,
    //   "DistrictDetailId": this.state.dictID,
    //   "VenueDetailId": this.state.vnueID,
    //   "UserDetailModel": {
    //       "EmailAddress": "Test1@Test.com",
    //       "Password": "Test1",
    //       "CountryDetailId": this.state.ctryID,
    //       "StateDetailId": this.state.steID,
    //       "DistrictDetailId": this.state.dictID
    //   
  // 
  // )
  //   .then(function (response) {
  //     console.log(response);
  //   },
  //   this.openModel)
   }

  
  render() {
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

  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="" />
        <h3>
          Company <span></span>
        </h3>
      </LogoWrapper>
      <Form onSubmit={this.handleSubmit}>
        <h3>Log In</h3>
        <Input placeholder="Email" name="instPass" value={this.state.value} onChange={this.handleEmail} required autocomplete/>
        <Input type="password" placeholder="password" name="Password" value={this.state.value} onChange={this.handlePass} required autocomplete/>
        <button>Login</button>
      </Form>
      <Last>
        <Terms>
          By Loging in, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Don't have an account? <span>Sign Up</span>
        </h4>
      </Last>
    </Container>
  );
}
}



export default Sidebar;
