import React from "react"
import SectionSubtitle from './sectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import classes from '../../styles/services.module.css'
import ServicesItem from "./servicesitem"


const Services = () => {
    return (<section id="services">
        <Container>
            <Row>
                <Col lg='6' md='4' sm='12'>
                    <div className={`${classes.services_container}`}>
                        <div>
                            <ServicesItem title='App Developement' icon="ri-apps-line"/>
                            <ServicesItem title='Web Developement' icon="ri-computer-line"/>
                        </div>
                        <ServicesItem title='Full-Stack Developement' icon="ri-code-s-slash-line"/>
                    </div>
                </Col>
                <Col lg='6' md='12' sm='12'>
                    <SectionSubtitle subtitle='What I do'/>
                    <h3 className="mb-0 mt-4">Better Design</h3>
                    <h3 className="mb-4">Better Experience</h3>
                    <p>Excellence, good design and stability is the priority. I love new challenges and improve my current knowledge.</p>
                </Col>
            </Row>
        </Container>
    </section>

);
}
export default Services