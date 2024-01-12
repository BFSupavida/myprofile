import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        <main className="main-section">{children}</main>
        </>
    );
}

export default Layout;