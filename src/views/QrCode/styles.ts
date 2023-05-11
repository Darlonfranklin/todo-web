import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;

  h1 {
    color: #ee6b26;
  }

  p {
    color: #20295f;
  }
`;

export const QrCodeArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ValidationCode = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  span {
    padding-top: 10px;
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    font-size: 30px;
    font-weight: bold;
    color: green;
    padding: 10px;
    margin-top: 10px;
    text-align: center;
    border-radius: 5px;
    border: 2.5px solid green;
  }

  button {
    font-weight: bold;
    background: #ee6b26;
    color: #fff;
    font-size: 18px;
    padding: 10px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    margin-top: 10px;

    &:hover {
      background: #20295f;
    }
  }
`;