import { useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import MemberList from "./pages/memberList/MemberList";
import User from "./pages/user/User";
import Member from "./pages/member/Member";
import NewUser from "./pages/newUser/NewUser";
import NewMember from "./pages/newMember/NewMember";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signup"
import SideMenu from "./components/topbar/Topbar1";
function App() {
  const [inactive, setInactive] = useState(true);

  return (
    <Router>
      <div className="container">      
        <Switch>
          <Route exact path="/">
            <SideMenu onCollapse={(inactive) =>{ setInactive(inactive); }} />
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <UserList />
          </Route>
          <Route path="/user/:userId">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <User />
          </Route>
          <Route path="/newUser">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <NewUser />
          </Route>
          <Route path="/members">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <MemberList />
          </Route>
          <Route path="/member/:userId">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <Member />
          </Route>
          <Route path="/newMember">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <NewMember />
          </Route>
          <Route path="/products">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <ProductList />
          </Route>
          <Route path="/product/:productId">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <Product />
          </Route>
          <Route path="/newproduct">
          <SideMenu onCollapse={(inactive) => { setInactive(inactive); }}/>
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
