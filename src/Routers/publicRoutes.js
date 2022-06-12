import React from "react";
import { Route, Switch } from "react-router";
import Header from "../Components/Header/header";
import Login from "../Containers/Login/login";
import Management from "../Containers/Management/management";
import ResetPassword from "../Containers/ResetPassword/resetPassword";
import Sidebar from "../Components/Sidebar/sidebar";
import AddUser from "../Containers/AddUser/addUser";
import Orders from "../Containers/Orders/orders";
import Issues from "../Containers/Issues/issues";
import AddMerchant from "../Containers/AddMerchant/addMerchant";
import Signup from "../Containers/Signup/Signup";
import Profile from "../Containers/Profile/profile";
import OrderDetail from "../Containers/OrderDetail/orderDetail";
import CreateIssue from "../Containers/CreateIssue/createIssue";
import Claim from "../Containers/Claim/claim";
import ClaimDetails from "../Containers/ClaimDetails/claimdetails";
import CMS from "../Containers/CMS/cms";
import ViewUser from "../Containers/ViewUser/viewUser";
import ViewIssue from "../Containers/ViewIssue/viewIssue";
import CMSUpdate from "../Containers/CMSUpdate/cmsUpdate";
import OrderMerchant from "../Containers/OrderMerchant/orderMerchant";

const PublicRoutes = () => {
  return (
    <div className="main-box">
      <Header />
      <div className="main-prop">
        <Sidebar />
        <div className="main-body">
          <Switch>
            {/* <Route path="/reset-password" component={ResetPassword} />
          <Route path="/" component={Login} /> */}
            {/* <Route path="/orders" component={Orders} />
            <Route path="/issues" component={Issues} />
            <Route path="/claim" component={Claim} />
            <Route path="/cms" component={CMS} />
            <Route path="/claim-details" component={ClaimDetails} />
            <Route path="/add-user" component={AddUser} />
            <Route path="/view-user" component={ViewUser} />
            <Route path="/view-issue" component={ViewIssue} />
            <Route path="/cms-update" component={CMSUpdate} />
            <Route path="/create-issue" component={CreateIssue} />
            <Route path="/order-merchant" component={OrderMerchant} />
            <Route path="/order-detail" component={OrderDetail} />
            <Route path="/add-merchant" component={AddMerchant} />
            <Route path="/profile" component={Profile}></Route>
            <Route path="/management" component={Management}></Route>
            <Route path="/signup" component={Signup}></Route>
            <Route path="/" component={Login} /> */}
            
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default PublicRoutes;
