import React from 'react'
import megaphone from "../images/036-megaphone.svg";
import compass from "../images/025-compass.svg";
import trophy from "../images/035-trophy.svg";

export default function ThreeBoxes() {
    return (
        <div>
            <div className="container mx-auto p-10">
                <h3 className='text-3xl font-bold text-center'>Nos encontramos trabajando.</h3>
                <p className='text-center text-sm md:w-1/2 mx-auto'>
                    A finales del año 2020 la plataforma estará a tu disposición para:
                </p>
            </div>
            <div className="container mx-auto md:flex md:mb-10 px-4 md:px-0">
                <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl p-6 mb-4 md:mr-6">
                    <img src={megaphone} alt="" className='w-20 mx-auto py-6'/>
                    <h4 className='text-center font-semibold mb-6'>Mostrar tu trabajo.</h4>
                    <p className='text-sm text-center'>Con la idea de mostrar tu trabajo al mayor número de personas,
                        creamos un
                        sistema donde es fácil publicar tus obras, proyectos o renders.</p>
                </div>
                <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl mb-4 p-6">
                    <img src={compass} alt="" className='w-20 mx-auto py-6'/>
                    <h4 className='text-center font-semibold mb-6'>Encontrar proveedores.</h4>
                    <p className='text-sm text-center'>Alguna vez haz tenido la necesidad de encontrar un buen proveedor
                        o comparar
                        con algún otro, los proveedores también podrán darse de alta en el sistema y mostrar sus
                        productos y servicios.</p>
                </div>
                <div className="box-border w-full md:w-2/6 rounded-sm shadow-2xl p-6 mb-4 md:ml-6">
                    <img src={trophy} alt="" className='w-20 mx-auto py-6'/>
                    <h4 className='text-center font-semibold mb-6'>Recibir evaluaciones de clientes.</h4>
                    <p className='text-sm text-center'>Recibir evaluaciones de clientes es importante para construir tu reputación
                        online, por eso <b>Arquitect.io</b> contará con un sistema de evaluación para los usuarios y
                        proveedores que estén registrados.</p>
                </div>
            </div>
        </div>
    )
}