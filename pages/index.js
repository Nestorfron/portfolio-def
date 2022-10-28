import { Fragment } from "react"
import Hero from "../components/UI/hero"
import Services from "../components/UI/services"
import About from "../components/UI/about"
import Portfolio from "../components/UI/portfolio"
import Conctact from "../components/UI/contact"

export default function Home(){
  return (
  <Fragment>
    <Hero />
    <Services />
    <About />
    <Portfolio />
    <Conctact />
  </Fragment>
  );
}