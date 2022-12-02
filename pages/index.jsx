import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import FormContact from "../scenes/home/FormContact";
import Header from "../scenes/home/Header/Header";
import Kols from "../scenes/home/Kols";
import OurWork from "../scenes/home/OurWork/OurWork";
import styles from "../styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import Footer from "../scenes/home/Footer/Footer";

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setIndex(window.scrollY / window.innerHeight);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="main">
      <Header index={index} />
      <Kols />
      <OurWork />
      <FormContact />
      <Footer index={index}/>
      {/* <Footer />
      <Footer /> */}
    </div>
  );
}
