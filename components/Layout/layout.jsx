import React, { Fragment} from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";


const Layout = (props) => {
    return (<Fragment>
        <Header/>
            <div>
                {props.children}
            </div>
        <Footer/>
    </Fragment>
)
};

export default Layout;