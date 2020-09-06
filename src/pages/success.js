import React from "react"
import Header from "../components/header";
import ThreeBoxes from "../components/three-boxes";
import Footer from "../components/footer";
import ImageMessage from "../components/image-message";

export default function Home() {
    return (
        <>
            <Header/>
            <div className='container mx-auto'>
                <h1 className='text-5xl text-red-700 text-center font-bold p-20'>Gracias por suscribirte.</h1>
            </div>
            <ThreeBoxes/>
            <ImageMessage/>
            <Footer/>
        </>
    )
}