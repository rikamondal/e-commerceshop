import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "80vh", padding: "20px" }}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;