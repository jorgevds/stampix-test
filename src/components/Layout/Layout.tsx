import React from "react";
import Header from "../Navigation/Header";

export type ChildrenProp = React.ReactNode;

interface LayoutProps {
  children: ChildrenProp;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="min-h-screen bg-cover minlg:h-screen md:pb-20 minlg:bg-confetti-background bg-petrol">
      <Header />
      {children}
    </section>
  );
};

export default Layout;
