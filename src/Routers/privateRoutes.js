// export default PrivateRoutes;
import React, { Suspense } from "react";
import PrivateGuard from "./privateGuard";
import { Switch, Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import Header from "../Components/Header/header";
import ErrorPage from "../Components/Errorpages/Error";
import Login from "../Containers/Login/login";
import Management from "../Containers/Management/management";
// import ResetPassword from "../Containers/ResetPassword/resetPassword";
import Sidebar from "../Components/Sidebar/sidebar";
import AddUser from "../Containers/AddMerchantUser/addMerchantUser";
import MerchantOrders from "../Containers/MerchantOrders/Merchantorders";
import Issues from "../Containers/Issues/issues";
import AddMerchant from "../Containers/AddMerchant/addMerchant";
import Signup from "../Containers/Signup/Signup";
import { Link } from "react-router-dom";
import Claim from "../Containers/Claim/claim";
import ClaimDetails from "../Containers/ClaimDetails/claimdetails";
import CMS from "../Containers/CMS/cms";
import ViewUser from "../Containers/ViewMerchantUser/viewMerchantUser";
import ViewIssue from "../Containers/ViewIssue/viewIssue";
import CMSUpdate from "../Containers/CMSUpdate/cmsUpdate";
import Profile from "../Containers/Profile/profile";
import OrderDetail from "../Containers/OrderDetail/orderDetail";
import CreateIssue from "../Containers/CreateIssue/createIssue";
import OrderMerchant from "../Containers/OrderMerchant/orderMerchant";
import ViewMerchant from "../Containers/ViewMerchant/viewMerchant";
import UserManagement from "../Containers/UserManagement/userManagement";
import MerchantUserManagement from "../Containers/merchant-user-management/merchant-user-management";
import AddMerchantUser from "../Containers/AddMerchantUser/addMerchantUser";
import Orders from "../Containers/Orders/orders";
import ProtectionPlan from "../Containers/ProtectionPlan/protectionPlan";
import ResetPassword from "../Containers/ResetPassword/resetPassword";
import AdminUser from "../Containers/AdminUsers/adminUser";
import AddAdminUser from "../Containers/AdminUsers/adminUser";
import Payment from "../Containers/Payment/Payment"
import CompanyProfile from "../Containers/CompanyProfile/CompanyProfile";
import MyUsers from "../Containers/MyUsers/MyUsers"

class PrivateRoutes extends React.Component {

  render() {
    return (
      <div className="main-box">
        {/* <Spinner /> */}
        {/* <div > */}
        <Header />
        <div className="main-prop">
          <Sidebar />
          <div className="main-body">
            {this.props.successMessage && (
              <Alert variant={"success"}>
                {/* {this.props.successMessage} */}
                {/* <img src={Check} />{this.props.successMessage} */}
              </Alert>
            )}
            {this.props.errorMessage && (
              <Alert variant="danger" style={{ maxWidth: "400px" }}>
                <img src={Error} />
                {this.props.errorMessage}
              </Alert>
            )}
            {/* admin routes */}
            <Suspense fallback={<div />}>
              <Switch>
                {/* <PrivateGuard
                  exact
                  path="/protection-plan"
                  component={ProtectionPlan}
                /> */}
                <PrivateGuard exact exact path="/orders" component={Orders} />
                <PrivateGuard

                  exact
                  path="/merchant-orders"
                  component={MerchantOrders}
                />
                <PrivateGuard exact path="/issues" component={Issues} />
                {/* <PrivateGuard exact path="/claims" component={Claim} /> */}
                {/* <PrivateGuard exact path="/payment" component={Payment} /> */}
                {/* <PrivateGuard exact path="/cms" component={CMS} /> */}
                <PrivateGuard
                  exact
                  path="/claim-details"
                  component={ClaimDetails}
                />
                <PrivateGuard exact path="/add-user" component={AddUser} ></PrivateGuard>
                {/* <PrivateGuard
                  exact
                  path="/add-merchant-user"
                  component={AddMerchantUser}
                /> */}
                <PrivateGuard
                  exact
                  path="/companyprofile"
                  component={CompanyProfile}
                />
                <PrivateGuard
                  exact
                  path="/add-admin-user"
                  component={AddAdminUser}
                />
                {/* <PrivateGuard
                  exact
                  path="/admin-users"
                  component={AdminUser}
                /> */}
                {/* <PrivateGuard
                  exact
                  path="/my-users"
                  component={MyUsers}
                /> */}

                <PrivateGuard
                  exact
                  path="/forgotPassword"
                  component={ResetPassword}
                />
                {/* <PrivateGuard
                  exact
                  path="/view-merchant-user"
                  component={ViewUser}
                /> */}
                <PrivateGuard exact path="/view-issue" component={ViewIssue} />
                <PrivateGuard exact path="/cms-update" component={CMSUpdate} />
                <PrivateGuard
                  exact
                  path="/create-issue"
                  component={CreateIssue}
                />
                {/* <PrivateGuard
                  exact
                  path="/order-merchant"
                  component={OrderMerchant}
                /> */}
                <PrivateGuard
                  exact
                  path="/order-detail"
                  component={OrderDetail}
                />

                <PrivateGuard
                  exact
                  path="/add-merchant"
                  component={AddMerchant}
                />
                <PrivateGuard
                  exact
                  path="/profile"
                  component={Profile}
                ></PrivateGuard>
                {/* <PrivateGuard
                  exact
                  path="/management"
                  component={Management}
                ></PrivateGuard> */}

                <PrivateGuard
                  exact
                  path="/signup"
                  component={Signup}
                ></PrivateGuard>
                <PrivateGuard
                  exact
                  path="/view-merchant"
                  component={ViewMerchant}
                ></PrivateGuard>
                <PrivateGuard
                  exact
                  path="/user-management"
                  component={UserManagement}
                ></PrivateGuard>
                <PrivateGuard
                  exact
                  path="/merchant-user-management"
                  component={MerchantUserManagement}
                ></PrivateGuard>
                {/*____________________________________________________________________________ */}
                {/* admin's all routes */}

                <PrivateGuard
                  exact
                  path="/admin/management"
                  component={Management}
                />
                <PrivateGuard
                  exact
                  path="/admin/my-users"
                  component={MyUsers}
                />
                <PrivateGuard
                  exact
                  path="/admin/view-my-user"
                  component={ViewUser}
                />
                <PrivateGuard
                  exact
                  path="/admin/protection-plan"
                  component={ProtectionPlan}
                />
                <PrivateGuard
                  exact
                  path="/admin/users"
                  component={AdminUser}
                />
                <PrivateGuard
                  exact
                  path="/admin/orders"
                  component={Orders} />

                <PrivateGuard
                  exact
                  path="/admin/claims"
                  component={Claim} />

                <PrivateGuard
                  exact
                  path="/admin/payment"
                  component={Payment} />

                <PrivateGuard
                  exact
                  path="/admin/profile"
                  component={Profile}
                />
                <PrivateGuard
                  exact
                  path="/admin/order"
                  component={OrderDetail}
                />
                <PrivateGuard
                  exact
                  path="/admin/add-merchant"
                  component={AddMerchant}
                />
                <PrivateGuard
                  exact
                  path="/admin/view-merchant"
                  component={ViewMerchant}
                />
                <PrivateGuard
                  exact
                  path="/admin/view-issue"
                  component={ViewIssue} />

                <PrivateGuard
                  exact
                  path="/admin/cms"
                  component={CMS} />
                <PrivateGuard
                  exact
                  path="/admin/add-user"
                  component={AddMerchantUser}
                />
                <PrivateGuard
                  exact
                  path="/admin/update-user"
                  component={AddMerchantUser}
                />

                <PrivateGuard
                  exact
                  path="/admin/create-issue"
                  component={CreateIssue}
                />

                <PrivateGuard
                  exact
                  path="/admin/view-issue"
                  component={ViewIssue} />

                <PrivateGuard
                  exact
                  path="/admin/order-detail"
                  component={OrderMerchant} />


                {/* *******************

                 merchant's all routes */}

                <PrivateGuard
                  exact
                  path="/merchant/companyprofile"
                  component={CompanyProfile}
                />

                <PrivateGuard
                  exact
                  path="/metchant/issues"
                  component={Issues} />

                <PrivateGuard
                  exact
                  path="/merchant/users"
                  component={MerchantUserManagement}
                />

                <PrivateGuard
                  exact
                  path="/merchant/orders"
                  component={MerchantOrders}
                />

                <PrivateGuard
                  exact
                  path="/merchant/profile"
                  component={Profile}
                />

                <PrivateGuard
                  exact
                  path="/merchant/view-user"
                  component={ViewUser}
                />

                <PrivateGuard
                  exact
                  path="/merchant/add-user"
                  component={AddMerchantUser}
                />

                <PrivateGuard
                  exact
                  path="/merchant/order"
                  component={OrderMerchant}
                />

                <PrivateGuard
                  exact
                  path="/order"
                  component={OrderMerchant}
                />

                <PrivateGuard exact path="/orders" component={Orders} ></PrivateGuard>
                {/* User's all route 

              _________________________  */}


                <Route exact path="/" render={() => <Redirect to={"/login"} />} />
                <PrivateGuard component={ErrorPage} />

              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  isLoading: state.commonReducer.loading,
  successMessage: state.commonReducer.successMessage,
  errorMessage: state.commonReducer.errorMessage,
});

export default connect(mapStateToProps)(PrivateRoutes);
