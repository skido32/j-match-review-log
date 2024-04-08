import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <div>
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
        <div>J Match Review Log</div>
        <div>
          <div>
            Jリーグの試合分析に特化した
            <br />
            ブログまとめサイト
          </div>
        </div>
      </div>
    </footer>
  );
};
