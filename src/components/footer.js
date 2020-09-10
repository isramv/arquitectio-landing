import React from "react";
import logoWhite from "../images/arquitectio-logo-white.webp";

export default function Footer() {
    return(
        <footer className='bg-black p-6 mt-6'>
            <div className='container center mx-auto md:flex'>
                <div className="w-full mb-4 md:w-1/3 md:left md:mb-0">
                    <img className='w-40 mx-auto md:w-auto md:mx-0' src={logoWhite} alt="arquitect.io footer logo"/>
                </div>
                <div className="w-full md:w-2/3 md:self-center">
                    <p className='text-white text-center md:text-right'>Derechos reservados 2020.</p>
                </div>
            </div>
        </footer>
    )
}
