import React from "react";
import heroImage from "../images/hero-image.png";

export default function Hero() {
    return (
        <div className="md:flex md:items-center">
            <div className="md:w-1/2">
                <img className="pt-10" src={heroImage}/>
            </div>
            <div className="bg-black flex-grow p-4 md:w-1/2 md:p-10 md:mx-6 rounded-lg">
                <div>
                    <h1 className='text-white font-bold text-3xl leading-tight mb-6'>La plataforma para mostrar tu
                        trabajo y obtener clientes.</h1>
                    <p className='font-semibold text-white mb-6'>Arquitect.io es la plataforma para encontrar un
                        profesional cerca de ti, Arquitectos, Interioristas y Proveedores.</p>
                </div>
                <div className='bg-white px-6 py-4 rounded'>
                    <h2 className='font-serif font-semibold'>Déjanos tu email, te avisaremos del lanzamiento:</h2>
                    <form
                        name='subscribe'
                        method='post'
                        data-netlify='true'
                        data-netlify-honeypot="bot-field"
                        className='mt-6'
                        action='/success'
                        netlify>
                        <input type="hidden" name="form-name" value="subscribe" />
                        <input type='email' name='email' className='bg-gray-200 rounded border-gray-500 mr-4 p-2 ' required='true'/>
                        <button className='rounded bg-red-600 hover:bg-red-800 font-bold text-white py-2 px-4'
                                type='submit'>Avisame
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
