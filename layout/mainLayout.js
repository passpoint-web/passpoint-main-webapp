import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header
        logo
        bg="white"
        textNormal="black"
        textActive="primary"
        textLogIn="primary"
        bgLine="primary"
        bgSignUp="primary"
        textSignUp="white"
        border="border-primary"
        borderColor="border-primary"
        hoverText="primary"
      />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
