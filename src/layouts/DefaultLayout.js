import React from "react";
import { Footer } from "./partials/Footer.comp";
import { Header } from "./partials/Header.comp";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      {/* header */}
      <header className="header">
        <Header />
      </header>

      {/* main body */}
      <main className="main">{children}</main>

      {/*footer area  */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
