import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

const DefaultLayout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default DefaultLayout;
