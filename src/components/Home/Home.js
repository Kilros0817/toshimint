import React from "react";
import './Layout.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";


const Home = () => {
    return(
        <body className="main-bg d-flex flex-column">
            <div className="min-vh-100">
                <Header />
                <Main />
                <Footer />
            </div>
        </body>
   )
};

export default Home;