import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
