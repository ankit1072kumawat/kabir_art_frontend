import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { getMerchantDetail ,getDetail } from '../Redux/Action/merchantAction'



// const adminRoutes = [
//   '/addMerchant',
//   "/addUser",
//   "/issues",
//   "/management",
//   // "/admin/management",
//   "/merchant-user-management",
//   "/orders",
//   "/protection-plan",
//   "/forgotPassword",
//   "/admin-users",
//   "/add-admin-user",
//   "/payment",
//   "/profile",
//   "/claims",
//   "/cms",
//   "/view-issue",
//   "/my-users"
// ]

const adminRoutes = [

  "/admin/management",
  "/admin/my-users",
  "/admin/protection-plan",
  "/admin/users",
  "/admin/orders",
  "/admin/claims",
  "/admin/payment",
  "/admin/profile",
  "/admin/order",
  "/admin/add-merchant",
  "/admin/view-merchant",
  "/admin/cms",
  "/admin/view-my-user",
  "/admin/update-user",
  "/admin/view-issue",
  "/admin/create-issue",
  "/admin/order-detail",
  "/profile"
]

const merchantRoutes = [
  "/merchant/companyprofile",
  "/metchant/issues",
  "/merchant/users",
  "/merchant/orders",
  "/merchant/profile",
  "/merchant/view-user",
  "/merchant/add-user",
  "/merchant/order",
  "/profile"
]


// const merchantRoutes = [
//   "/addUser",
//   "/add-merchant-user",
//   "/merchant-user-management",
//   "/view-merchant-user",
//   "/issues",
//   "/profile",
//   // "/management",
//   "/merchant-orders",
//   "/forgotPassword",
//   "/companyprofile"
// ]

const customerRoutes = [
  "/profile",
  "/orders",
]
class PrivateGuard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      merchantDetail: {}
    }
  }
  async componentDidMount() {
    const merchantId = await localStorage.getItem('merchantID');
    // const role = await localStorage.getItem('role');
    let abc="";
    if(merchantId === "intransit-admin")
       abc = await getDetail(merchantId)
    else
       abc = await getMerchantDetail(merchantId)
    this.setState({
      merchantDetail: abc?.data?.data?.Item
    })
  }
  render() {
    const merchantId = localStorage.getItem('merchantID');

    const route = this.props.location?.pathname;
    let returnData = "";
    if (localStorage.getItem("userId") && localStorage.getItem("token")) {
      const userRole = localStorage.getItem('role');
      if (merchantId) {

        if (merchantId === "intransit-admin" && adminRoutes.indexOf(route) != -1) {
          returnData = <Route {...this.props} />;
        } else if (merchantId === "" && customerRoutes.indexOf(route) != -1) {
          returnData = <Route {...this.props} />;
        } else {
          if (merchantRoutes.indexOf(route) != -1 ) {
            returnData = <Route {...this.props} />;
            } else {
            returnData = <Route {...this.props} />;
            }
        }
      }

    } else {
      localStorage.clear();
      returnData = (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: this.props.location },
          }}
        />
      );
    }
    

    return <div>{returnData}</div>;
  }
}




const mapStateToProps = (state) => {

  return {
    ...state,
    authData: state.authReducer.authData,
    merchantDetail: state.merchantReducer.merchantDetail,
    commonData: state.commonReducer.errorData
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getMerchantDetail }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateGuard);