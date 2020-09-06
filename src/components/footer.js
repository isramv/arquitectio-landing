import React from "react";
import logoWhite from "../images/arquitectio-logo-white.png";

export default function Footer() {
    return(
        <footer className='bg-black p-6 mt-6'>
            <div className='container mx-auto md:flex'>
                <div className="w-1/3">
                    <img src={logoWhite} alt="arquitectio footer logo"/>
                </div>
                <div className="w-2/3 md:self-center">
                    <p className='text-white text-right'>Derechos reservados 2020.</p>
                </div>
            </div>
        </footer>
    )
}
