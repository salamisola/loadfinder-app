import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Loginpagecontainer from "../components/containers/Loginpagecontainer";

class Login extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Loginpagecontainer />
                <h1>Load Search App</h1>
                <Footer />
            </div >
        )
    }
}

export default Login;