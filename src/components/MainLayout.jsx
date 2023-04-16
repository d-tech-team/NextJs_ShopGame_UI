import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout ({ children })  {
    return (
      <div>
        <Header />
        <main>
          <div className="min-vh-100">{children}</div>
        </main>
        <Footer />
      </div>
    );
};
