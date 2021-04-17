import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../component/Main";
import Web from "../component/Web";
import Footer from "../component/Footer";
import Service from "../component/Service";
import Contact from "../component/Contact";
import About from "../component/About";

export default function Home() {
  return (
    <>
      <Main />
      <Web />
      {/* <Service /> */}
      <a NAME="Contact"></a>
      <Contact />
      <a NAME="About"></a>
      <About />
      <Footer />
    </>
  );
}
