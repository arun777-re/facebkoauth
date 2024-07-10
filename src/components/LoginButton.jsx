import React, { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
 let userData = null;
 
  const handleLoginSuccess = (res) => {
     userData = res?.data;

    navigate( "/user/analytics",
        {state:userData}
    );
    console.log(userData);
  };

  return (
    <div>
      {!userData && (
        <LoginSocialFacebook
          appId={"1197768614710692"}
          onResolve={handleLoginSuccess}
          onReject={(err) => {
            console.error(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      )}
    </div>
  );
};

export default LoginButton;
