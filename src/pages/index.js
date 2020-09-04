import React from "react"
import logo from '../images/arquitectio_logo.svg'
import heroImage from '../images/hero-image.png'
import ilustration from '../images/illustration_girl.png'

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
                        <h1 className='text-white font-bold text-3xl leading-tight mb-6'>La plataforma para mostrar tu
                            trabajo y obtener clientes.</h1>
                        <p className='font-semibold text-white mb-6'>Arquitect.io es la plataforma para encontrar un
                            profesional cerca de ti, Arquitectos, Interioristas o Proveedores.</p>
                    </div>
                    <div className='bg-white px-6 py-4 rounded'>
                        <h2 className='text-semibold'>Dejanos tu email, te avisaremos del lanzamiento:</h2>
                        <form action="" className='mt-6'>
                            <input className='border-b-2 border-gray-500 mr-4' type="text"/>
                            <button className='rounded bg-red-600 hover:bg-red-800 font-bold text-white py-2 px-4'
                                    type='submit'>Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="container mx-auto p-10">
                    <h3 className='text-3xl font-bold text-center'>Nos encontramos trabajando.</h3>
                    <p className='text-center text-sm md:w-1/2 mx-auto'>
                        A finales del año 2020 la plataforma estará a tu disposción para:
                    </p>
                </div>
                <div className="container mx-auto md:flex md:mb-10 px-4 md:px-0">
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl p-6 mb-4 md:mr-6">
                        <h4 className='text-center font-semibold mb-6'>Mostrar tu trabajo.</h4>
                        <p className='text-sm'>Con la idea de mostrar tu trabajo y calida al mayor numero de personas,
                            creamos un sistema donde sera facil publicar tus obras y proyectos.</p>
                    </div>
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl mb-4 p-6">
                        <h4 className='text-center font-semibold mb-6'>Encontrar proveedores.</h4>
                        <p className='text-sm'>Alguna vez haz tenido la necesidad de encontrar un buen provedor o
                            comparar con algun otro, los proveedores tambien podran darse de alta en el sistema y
                            mostrar sus productos y servicios.</p>
                    </div>
                    <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl p-6 mb-4 md:ml-6">
                        <h4 className='text-center font-semibold mb-6'>Recibir evaluaciones de clientes.</h4>
                        <p className='text-sm'>Recibir evaluaciones de clientes es importante para encontrar nuevos
                            clientes, por eso <b>Arquitect.io</b> contara con un sistema de evaluacion para
                            los usuarios que
                            esten registrados.</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-10 px-4'>
                <div className='md:flex items-center'>
                    <div className="md:w-4/7">
                        <h3 className='font-semibold text-3xl leading-snug'>Tu contentido es importante, es reflejo de
                            tu trabajo.</h3>
                        <p className='text-sm py-6'>Valoramos el contenido de calidad, por eso en Arquitect.io
                            seleccionaremos el mejor contenido para mostrarlo al mayor numero de personas posible.</p>
                    </div>
                    <div className="md:w-3/7">
                        <img src={ilustration} alt="Girl showing of her work." className=''/>
                    </div>
                </div>
            </div>
            <footer className='bg-black'>

            </footer>
        </>
    )
}
