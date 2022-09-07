import * as React from "react";

import "./layout.scss";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <div className="todo-layout">{children}</div>
    </>
  );
};
