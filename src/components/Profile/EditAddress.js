import React, { useContext, useState, useEffect } from "react";
import { SideBar } from "./SideBar";
import { AuthContext } from "../../contexts/auth_context";
import { Loader } from "../Layout/loader";
import userApi from "../../api/user_api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export const EditAddress = () => {
  const {
    authState: { authLoading, user },
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
      console.log("ar:", arrAddress);
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
        // handlePushPage("profile/acc-address");
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
  return (
    <>
      {authLoading ? (
        <Loader />
      ) : (
        <div className="profile-wrapper">
          <h1 className="profile-title">MY ACCOUNT</h1>
          <div className="profile-content">
            <SideBar />
            <div>
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
                  <h5 className="profile-info-subtitle">PHONE NUMBER</h5>
                  <div className="profile-info-input">
                    <input
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={onChangeInfoUserForm}
                    />
                  </div>
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
                  <h5 className="profile-info-subtitle">DISTRICT*</h5>
                  <div className="profile-info-input">
                    <input
                      type="text"
                      name="district"
                      value={district}
                      onChange={onChangeInfoUserForm}
                    />
                  </div>
                  <h5 className="profile-info-subtitle">PROVINCE/CITY*</h5>
                  <div className="profile-info-input">
                    <input
                      type="text"
                      name="province"
                      value={province}
                      onChange={onChangeInfoUserForm}
                    />
                  </div>
                </div>
              </div>
              <div className="info-footer">
                <button
                  className="btn-save-edit-address"
                  onClick={handleSubmitChangeInfoUser}
                >
                  SAVE
                </button>
                <button className="btn-cancel">CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
