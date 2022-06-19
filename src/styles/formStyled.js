import styled from "styled-components";

export const Titulos = styled.h1`
  color: ${(props) => (props.color ? props.color : "#046db5")};
`;
export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  background-color: #f5f5f5;
  border-radius: 25px;
  margin-bottom: 15px;
`;
export const Icon = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  position: absolute;
`;
export const InputText = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
  padding-left: 60px;
  padding-right: 20px;
`;
export const InputSelect = styled.select`
  width: 100%;
  height: 3em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
  padding-left: 60px;
  background-image: url(https://pitogyros.com/wp-content/uploads/intense-cache/icons/plugin/font-awesome/arrow-circle-down.svg);
  background-size: 20px;
  background-position: calc(100% - 20px);
  background-repeat: no-repeat;
  appearance: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
  }
`;