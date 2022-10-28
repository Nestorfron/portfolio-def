import React from 'react'
import SectionSubtitle from './sectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import classes from '../../styles/contact.module.css'
import Link from 'next/link'
import Form from '../UI/form'

const Contact = () => {
    return (
        <section id='contact' className={`${classes.contact_info_list}`}>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <SectionSubtitle subtitle='Contact me'/>
                        <h3 className='mt-4 mb-4'>Contact with me</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                        elit. Ab quis, perferendis accusantium soluta eius magnam
                        fuga iste. Sint neque ab voluptas similique
                        ut veritatis! Obcaecati libero sit commodi nemo culpa?</p>
                        <ul className={`${classes.contact}`}>
                            <li className={`${classes.info_item}`}>
                                <span><i className="ri-map-pin-line"></i></span>
                                <p>San José de Mayo, San José - Uruguay</p>
                            </li>
                            <li className={`${classes.info_item}`}>
                                <span><i className="ri-mail-line"></i></span>
                                <p>nestorfrones07@gmail.com</p>  
                            </li>
                            <li className={`${classes.info_item}`}>
                                <span><i className="ri-phone-line"></i></span>
                                <p>+59892486454</p>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='6' md='6'>
                        <Form/>
                    </Col>
                </Row>
            </Container>
        </section>

    )
}

export default Contact