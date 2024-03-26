"use client";
import { FC, useState } from "react";

export const Header: FC = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <div>
        <div>
          <img src="/soccer_ball_icon.png" width="26" height="26" />
          <span>J Match Review Log</span>
        </div>
        <div
          onClick={() => {
            setActive(!active);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul>
        <li>
          <a href="/">TOP</a>
        </li>
        <li>
          <a href="/categories/j1">J1</a>
        </li>
        <li>
          <a href="/categories/j2">J2</a>
        </li>
        <li>
          <a href="/categories/j3">J3</a>
        </li>
      </ul>
    </header>
  );
};
