import React from "react";
import heroImage from "../images/hero-image.webp";

export default function Hero() {
    return (
        <div className="md:flex md:items-center">
            <div className="md:w-1/2">
                <img alt="Hero Image" className="pt-10" src={heroImage}/>
            </div>
            <div className="bg-black m-2 p-4 flex-grow rounded-lg md:w-1/2 md:p-10 md:mx-6 md:m-0">
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
                        <label className='font-semibold mr-2 block' htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='bg-gray-200 rounded border-gray-500 border mr-2 p-2 ' required='true'/>
                        <button className='rounded bg-red-800 hover:bg-red-900 font-bold text-white py-2 px-4'
                                type='submit'>Avisame
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
