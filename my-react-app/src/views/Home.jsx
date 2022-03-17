import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

class Home extends React.Component {
    render() {
        return (
            <div className="page-home">
                <Header />
                <hr />
                <Main />
                <hr />
                <Footer />
            </div>
        );
    }
}

export default Home;