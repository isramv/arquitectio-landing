import React from 'react'
import logo from "../images/arquitectio_logo.svg";

export default function Header() {
    return (
        <div className='header p-5 bg-white shadow-xl'>
            <a href="/"><img className='w-64' src={logo} alt="Arquitect.io logo"/></a>
        </div>
    )
}
