import React from "react"
import { Container, Row, Col } from 'reactstrap'
import Link from "next/link"
import SectionSubtitle from "./sectionSubtitle"
import Image from "next/image"
import classes from '../../styles/about.module.css'

const About = () => {
    return (<section id="about">
        <Container>
            <Row>
                <Col lg='6' md='12'>
                    <SectionSubtitle subtitle='About me'/>
                    <h3 className='mt-4'>I&apos;m here</h3>
                    <h3 className='mb-4'>to help your next proyect</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis ipsa quo veniam 
                    perspiciatis reiciendis at? Omnis,
                    assumenda id cupiditate ipsum magni 
                    minima animi illo, possimus laborum at 
                    laboriosam reiciendis.</p>
                    <div className="d-flex align-items-center gap-5">
                        <div>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Problem Solving
                            </h6>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Search a Lot
                            </h6>
                        </div>
                        <div>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Creativ Idea
                            </h6>
                            <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                                <span className={`${classes.about_icon}`}><i className="ri-checkbox-circle-line"></i></span>
                                Hight Quality
                            </h6>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button className="primary_btn"><Link href='#portfolio'>My Portfolio</Link></button>
                        <button className="secondary_btn"><Link href='#'>Download CV</Link></button>

                    </div>
                </Col>
            </Row>
        </Container>
    </section>
        

)
}

export default About


