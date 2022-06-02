import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  heigth: 100vh;
  padding: 0 20px;
`;
export const Formulario = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  border-radius: 25px;
  box-sizing: border-box;
`;
export const Titulo = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0.5em;
  display: flex;
`;
export const Label = styled.input`
  width: 100%;
  height: 3em;
  margin: 0.7em;
  border-radius: 25px;
  background: #f5f5f5;
  border: #f5f5f5;
  font-size: 14px;
  &:before {
        position: relative;
        top:0;
        
        content: '${props => props.before}'
    }
`;
export const Redes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Google = styled.button`
  border: 0px solid #ea4335;
  color: #ffff;
  width: 20%;
  height: 48px;
  border-radius: 10px;
  margin-top: 2em;
  margin-left: 2em;
  box-sizing: border-box;
`;
export const Facebook = styled.button`
  color: #ffff;
  border: 0px solid #3b5998;
  margin-left: 2em;
  width: 20%;
  height: 48px;
  border-radius: 10px;
  margin-top: 2em;
  box-sizing: border-box;
`;

export const Boton = styled.button`
  display: block;
  background-color: #046db5;
  color: #ffff;
  border: 0px;
  border-radius: 15px;
  height: 48px;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5em;
`;
export const Subtitulo = styled.h5`
  text-align: center;
  font-size: 14px;
  margin: 2em;
`;