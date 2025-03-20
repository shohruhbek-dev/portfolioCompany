import Footer from "./footer";
import Navbar from "./navbar";

function Layout(props) {
    const { children } = props;

    return (
        <>

            <Navbar />
            {children}
            <Footer />
        </>
    );

}

export default Layout;