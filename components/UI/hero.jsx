import React from "react"
import SectionSubtitle from './sectionSubtitle'
import { Container, Row, Col } from 'reactstrap'
import Image from "next/image"
import Link from "next/link"
import HeroImg from '../../public/images/hero.jpg'
import classes from '../../styles/hero.module.css'


const Hero = () => {
    return <section className={`${classes.hero}`}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className={`${classes.hero_content}`}>
                        <SectionSubtitle subtitle="hello"/>
                        <h2 className="mt-3 mb-3">I&apos;m Nestor Frones</h2>
                        <h5 className="mb-4">Front-end Developer | JavaScript | React | Next.js | Redux</h5>
                        <p>
                            I have a great interest in the world of software. With the ability to learn and apply my knowledge professionally.
                            <br></br>What will be our next project?
                        </p>
                        <div className="mt-5">
                            <button className="primary_btn"><Link href="#">Hire me</Link></button>
                            <button className="secondary_btn"><Link href="#">Dowunload CV</Link></button>
                        </div>                
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className={`${classes.hero_img} text-end`}>
                        <Image alt='hero-image' src={HeroImg} width='400' height='400'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Hero