import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";

export const EditAddress = () => {
  const {
    authState: { authLoading, user },
    loadUser,
  } = useContext(AuthContext);

  const [infoUserForm, setInfoUserForm] = useState({
    fullname: user?.fullname || "",
    phone: "",
    streetAddress: "",
    district: "",
    province: "",
  });
  const { fullname, phone, streetAddress, district, province } = infoUserForm;
  let history = useHistory();
  const handlePushPage = (item) => {
    history.push(`/${item}`);
  };

  useEffect(() => {
    console.log("run effect");
    let arrAddress = "";
    if (user?.address) {
      arrAddress = user?.address.split(",") || "";
    }
    setInfoUserForm({
      ...infoUserForm,
      fullname: user?.fullname || "",
      phone: user?.phone || "",
      streetAddress: arrAddress !== "" ? arrAddress[0] : "",
      district: arrAddress !== "" ? arrAddress[1] : "",
      province: arrAddress !== "" ? arrAddress[2] : "",
    });
  }, [user]);

  const onChangeInfoUserForm = (event) =>
    setInfoUserForm({
      ...infoUserForm,
      [event.target.name]: event.target.value,
    });
  // console.log(infoUserForm);

  const handleSubmitChangeInfoUser = async () => {
    try {
      const infoUser = {
        email: user.email,
        info: {
          fullname,
          phone,
          address: streetAddress + "," + district + "," + province,
        },
      };
      const passData = await userApi.patchUpdateInfoUser(infoUser);
      if (passData.data.success) {
        await loadUser();
        handlePushPage("profile/acc-address");
        toast.success(passData.data.msg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        // setPasswordForm({
        //   email: user.email || "",
        //   oldPassword: "",
        //   newPassword: "",
        //   confirmPassword: "",
        // });
      }
    } catch (error) {
      console.log("error pass", error.response.data);
      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const [validationMsg, setValidationMsg] = useState({});

  const validateAll = () => {
    const msg = {};
    if (isEmpty(fullname)) {
      msg.fullname = "Please input your full name.";
    }
    if (isEmpty(phone)) {
      msg.phone = "Please input your phone number.";
    } else if (phone.length>11 || phone.length<10) {
      msg.phone = "Please input a valid phone number.";
    }
    if (isEmpty(streetAddress)) {
      msg.streetAddress = "Please input your street address.";
    }
    if (isEmpty(district)) {
      msg.district = "Please input your district.";
    }
    if (isEmpty(province)) {
      msg.province = "Please input your province or city.";
    }

    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const onSaveButton = () => {
    const isValid = validateAll();
    if (!isValid) return;

    
  }

  return (
    <div className="edit-address-container">
      <div className="account-info">
        <div className="profile-col-width">
          <h2>Contact Information</h2>
          <h5 className="profile-info-subtitle">FULL NAME</h5>
          <div className="profile-info-input">
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={onChangeInfoUserForm}
            />
          </div>
          <p style={{ color: "red" }}>{validationMsg["fullname"]}</p>
          <h5 className="profile-info-subtitle">PHONE NUMBER</h5>
          <div className="profile-info-input">
            <input
              type="number"
              name="phone"
              value={phone}
              onChange={onChangeInfoUserForm}
            />
          </div>
          <p style={{ color: "red" }}>{validationMsg["phone"]}</p>
        </div>
        <div className="profile-col-width account-info-right">
          <h2>Address</h2>
          <h5 className="profile-info-subtitle">STREET ADDRESS*</h5>
          <div className="profile-info-input">
            <input
              type="text"
              name="streetAddress"
              value={streetAddress}
              onChange={onChangeInfoUserForm}
            />
          </div>
          <p style={{ color: "red" }}>{validationMsg["streetAddress"]}</p>
          <h5 className="profile-info-subtitle">DISTRICT*</h5>
          <div className="profile-info-input">
            <input
              type="text"
              name="district"
              value={district}
              onChange={onChangeInfoUserForm}
            />
          </div>
          <p style={{ color: "red" }}>{validationMsg["district"]}</p>
          <h5 className="profile-info-subtitle">PROVINCE/CITY*</h5>
          <div className="profile-info-input">
            <input
              type="text"
              name="province"
              value={province}
              onChange={onChangeInfoUserForm}
            />
          </div>
          <p style={{ color: "red" }}>{validationMsg["province"]}</p>
        </div>
      </div>
      <div className="info-footer">
        <button
          className="btn-save-edit-address"
          onClick={() => {
            onSaveButton();
            handleSubmitChangeInfoUser();
          }}
        >
          SAVE
        </button>
        <Link to="/profile/acc-address" className="btn-cancel">CANCEL</Link>
      </div>
    </div>
  );
};
