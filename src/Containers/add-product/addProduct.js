import "./addProduct.scss";
// import "./../";
import BgImg from "../../Images/client.png";
import Testimonial from "../../Components/Testimonial/testimonial";
import React, {useState} from 'react'

const AddProduct = (props) =>  {
  const [state, setState] = useState({
    merchants: [
      {
        firstName: "",
        lastName: "",
        email: "",
        domainName: "",
        status: '',
        logo: ""
      },
    ],
    errorData: [
      {
        emailError: "",

        isValidEmail: "",
        isValidDoamin: "",
      }
    ],
    imageAttributes: {},
    authData: {},
    fileName: [],
    errorValue: null,
    responseError: null
  });
  const handleChange = (e, i) => {

    let temp = state
    temp.merchants[i][e.target.name] = e.target.value
    setState({ ...temp })

  }
  return (
    <div className="container">
    <div className="add-form">

    <div className="add-form-header">
      <h6>Merchant </h6>
    </div>

    <div className="view-data-detail">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Product Name <sup style={{ color: "Red" }}>*</sup></label>
            <input type="text" className="form-control"
              required
              maxlength="25"
              value={'firstName'}
              name="firstName"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>SKU Number <sup style={{ color: "Red" }}>*</sup></label>
            <input type="text" className="form-control"
              required
              maxlength="25"
              value={'lastName'}
              name="lastName"
              onChange={(event) =>
                handleChange(event)
              }
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Quantity <sup style={{ color: "Red" }}>*</sup></label>
            <input type="email" className="form-control"
              required
              value={'email'}
              name="email"
              onChange={(event) =>
                handleChange(event)
              }
            />
            {/* {merchantId ? null : <span style={{ color: "red" }}>
              {state.errorData[index]?.error == "Email is already exist with this url" ? state.errorData[index]?.error : null}
            </span>} */}

          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Type <sup style={{ color: "Red" }}>*</sup></label>
            <input type="email" className="form-control"
              required
              value={'email'}
              name="email"
              onChange={(event) =>
                handleChange(event)
              }
            />
            {/* {merchantId ? null : <span style={{ color: "red" }}>
              {state.errorData[index]?.error == "Email is already exist with this url" ? state.errorData[index]?.error : null}
            </span>} */}

          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Category<sup style={{ color: "Red" }}>*</sup></label>
            <input type="email" className="form-control"
              required
              value={'email'}
              name="email"
              onChange={(event) =>
                handleChange(event)
              }
            />
            {/* {merchantId ? null : <span style={{ color: "red" }}>
              {state.errorData[index]?.error == "Email is already exist with this url" ? state.errorData[index]?.error : null}
            </span>} */}

          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Description <sup style={{ color: "Red" }}>*</sup></label>
            <input type="email" className="form-control"
              required
              value={'email'}
              name="email"
              onChange={(event) =>
                handleChange(event)
              }
            />
            {/* {merchantId ? null : <span style={{ color: "red" }}>
              {state.errorData[index]?.error == "Email is already exist with this url" ? state.errorData[index]?.error : null}
            </span>} */}

          </div>
        </div>
      </div>
     

    </div>


  </div>
  </div>
  );
}

export default AddProduct;
