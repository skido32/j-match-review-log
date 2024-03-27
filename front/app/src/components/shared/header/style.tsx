import styled from "styled-components";

export const StyledImage = styled.img`
  width: 26px;
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;

export const StyledTitleDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHambugerDiv = styled.div<{ $isActive: boolean }>`
  width: 60px;
  height: 50px;
  position: relative;
  background-color: black;
  display: flex;
  justify-content: center;
  span {
    transition: 0.5s;
    position: absolute;
    width: 70%;
    height: 1px;
    background-color: white;
    &:first-of-type {
      ${({ $isActive }) =>
        $isActive ? `top: 50%;transform: rotate(45deg);` : `top: 20%;`};
    }
    &:nth-of-type(2) {
      top: 50%;
      opacity: ${({ $isActive }) => ($isActive ? 0 : 1)};
    }
    &:last-of-type {
      ${({ $isActive }) =>
        $isActive ? `top: 50%;transform: rotate(-45deg);` : `top: 80%;`};
    }
  }
`;

export const StyledSlideMenuUl = styled.ul<{ $isActive: boolean }>`
  background-color: black;
  position: fixed;
  top: 34px;
  width: 100%;
  transform: ${({ $isActive }) =>
    $isActive ? `translateX(0);` : `translateX(100%);`};
  transition: 0.5s;
  padding: 0;
  z-index: 1;
  li {
    line-height: 400%;
    text-align: center;
    font-size: 20px;
    list-style: none;
  }
`;

export const StyleAnkerTag = styled.a`
  text-decoration: none;
  color: white;
`;
