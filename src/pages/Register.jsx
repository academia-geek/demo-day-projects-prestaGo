import React from "react";
import FormRegister from "../components/FormRegister";
import { Wrapper } from "../styles/loginStyled";


const Register = () => {
  
  return (
    <div>
      <Wrapper justifyContent="space-between">
        <div>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1654461523/PrestaGo/img-01-dk_efp3ng.png"
            alt="info-register"
          />
        </div>
        <FormRegister/>
      </Wrapper>
    </div>
  );
};

export default Register;
