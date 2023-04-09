import Footer from "./Footer";
import Header from "./Header";

export default ({ children }) => {
    return (
      <>
        <Header />
        <main>
          <div className="min-vh-100">{children}</div>
        </main>
        <Footer />
      </>
    );
};
