import React from "react";
import { Container, Row, Col} from "reactstrap"
import classes from './footer.module.css'



const Footer = () => {

    const date = new Date()
    const year = date.getFullYear

    return (<footer>
        <Container>
            <Row>
                <Col lg='12'>
                    <div className={`${classes.footer_copyright}`}>
                    <p>&copy; Copyright {year} - Developed by Nestor Frones. All rights reserved</p> 
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
);
};

export default Footer;