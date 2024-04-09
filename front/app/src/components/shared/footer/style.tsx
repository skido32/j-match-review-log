"use client";
import styled from "styled-components";

export const StyledWrapperDiv = styled.div`
  background-color: black;
  padding: 20px 0;
`;

export const StyledMenuUl = styled.ul`
  padding: 0;
`;

export const StyledMenuItem = styled.li`
  text-align: center;
  list-style: none;
  line-height: 300%;
`;

export const StyledAnkerTag = styled.a`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

export const StyledTitleDiv = styled.div`
  text-align: center;
  color: white;
  font-size: 23px;
  font-weight: bold;
`;

export const StyledDescriptionWrapperDiv = styled.div`
  position: relative;
  height: 120px;
`;

export const StyledDescriptionDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translateX(-50%);
  width: 80%;
  text-align: center;
  font-size: 15px;
  color: white;
`;
