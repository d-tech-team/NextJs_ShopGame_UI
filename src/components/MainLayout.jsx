import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      console.log(isLoading);
      setIsLoading(!isLoading);
    }, 500);
  }, []);
  if (!isLoading) return <Loading />;

  return (
    <>
      <Header />
      <main>
        <div className="min-vh-100">{children}</div>
      </main>
      <Footer />
    </>
  );
}
