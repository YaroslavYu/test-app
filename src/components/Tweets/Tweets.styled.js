import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const StyledButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  background-color: #ae7be3;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const StyledDropdown = styled(Dropdown)`
  margin-top: 15px;
  margin-bottom: 15px;
`;
