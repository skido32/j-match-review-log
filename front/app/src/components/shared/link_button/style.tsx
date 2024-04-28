"use client";
import styled from "styled-components";

export const StyledSpan = styled.span<{ $colorCode: string }>`
  position: absolute;
  content: "";
  display: block;
  height: 15px;
  border-top: 1px solid ${({ $colorCode }) => $colorCode};
  &:first-of-type {
    top: 25px;
    right: 18px;
    width: 40px;
  }
  &:last-of-type {
    top: 18px;
    transform: rotate(35deg);
    right: 20px;
    width: 20px;
  }
`;

export const StyledAnkerTag = styled.a<{ $colorCode: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #a9a9a9;
  border-radius: 2em;
  color: ${({ $colorCode }) => $colorCode};
  font-weight: bold;
  font-size: 20px;
  width: 280px;
  height: 55px;
  text-decoration: none;
  position: relative;
`;
