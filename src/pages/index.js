import React from "react"
import Header from "../components/header";
import Hero from '../components/hero'
import ThreeBoxes from "../components/three-boxes";
import Footer from "../components/footer";
import ImageMessage from "../components/image-message";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <ThreeBoxes/>
            <ImageMessage/>
            <Footer/>
        </>
    )
}
