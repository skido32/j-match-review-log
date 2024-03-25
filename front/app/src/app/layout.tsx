"use client";
import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <StyledComponentsRegistry>
        <body style={{ margin: 0, overflowX: "hidden" }}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
