import React from "react"
import logo from '../images/arquitectio_logo.svg'
import heroImage from '../images/hero-image.png'

export default function Home() {
    return (
        <>
            <div className='header p-5 bg-white shadow-xl'>
                <img className='w-64' src={logo} alt="Arquitect.io logo"/>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/2">
                    <img className="pt-10" src={heroImage}/>
                </div>
                <div className="bg-black flex-grow p-4 md:w-1/2 md:p-10 md:mx-6 rounded-lg">
                    <div>
                        <h1 className='text-white font-bold text-3xl leading-tight mb-6'>La plataforma para mostrar tu trabajo y obtener clientes.</h1>
                        <p className='font-semibold text-white mb-6'>Arquitect.io es la plataforma para encontrar un profesional cerca de ti, Arquitectos, Interioristas o Proveedores.</p>
                    </div>
                    <div className='bg-white px-6 py-4 rounded'>
                        <h2 className='text-semibold'>Dejanos tu email, te avisaremos del lanzamiento:</h2>
                        <form action="" className='mt-6'>
                            <input className='border-b-2 border-gray-500 mr-4' type="text"/>
                            <button className='rounded bg-red-600 hover:bg-red-800 font-bold text-white py-2 px-4' type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto p-10">
                    <h3 className='text-3xl font-bold text-center'>Vestibulum mauris urna</h3>
                    <p className='text-center'>
                        Vestibulum mauris urna, rhoncus eget libero non, eleifend interdum nisl. Morbi quis turpis dui. Nam vitae iaculis turpis. Nam aliquet est eu egestas tincidunt.
                    </p>
                </div>
                <div className="container mx-auto md:flex">
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-xl p-6 mr-6">
                        <h4 className='text-center font-semibold mb-6'>Donec in enim</h4>
                        <p className='text-sm'>Sed quis dignissim ipsum, at vehicula lorem. Sed non eros id odio cursus rutrum.</p>
                    </div>
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-xl p-6">
                        <h4 className='text-center font-semibold mb-6'>Nulla laoreet</h4>
                        <p className='text-sm'>Nulla laoreet id nunc nec sagittis. Donec ac suscipit massa. Phasellus ac libero vestibulum, posuere elit eu, condimentum.</p>
                    </div>
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-xl p-6 ml-6">
                        <h4 className='text-center font-semibold mb-6'>Suspendisse</h4>
                        <p className='text-sm'>Proin at vehicula est. Cras a quam ut nulla bibendum tempor sit amet luctus felis. Donec pharetra urna a convallis iaculis. Ut eu faucibus lorem.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
