import React from "react";
import { CustomButtonStyle } from "../styles/loginStyled";

const CustomButton = ({
  type = "button",
  onClick,
  value,
  Icon,
  iconSize,
  margin,
  color,
  backgroundColor,
  border
}) => {
  return (
    <>
      <CustomButtonStyle
        type={type}
        onClick={onClick}
        border={border}
        color={color}
        backgroundColor={backgroundColor}
        style={{
          margin
        }}
      >
        {Icon ? <Icon size={iconSize} style={{ marginRight: "5px" }} /> : <></>}
        {value}
      </CustomButtonStyle>
    </>
  );
};
export default CustomButton;