import React from "react";
import illustration from "../images/illustration_girl.png";

export default function ImageMessage() {
    return(
        <div className='container mx-auto py-10 px-4'>
            <div className='md:flex items-center'>
                <div className="md:w-4/7">
                    <h3 className='font-semibold text-3xl leading-snug'>Tu contentido es importante, es reflejo de
                        tu trabajo.</h3>
                    <p className='text-sm py-6'>Valoramos el contenido de calidad, por eso en Arquitect.io
                        seleccionaremos el mejor contenido para mostrarlo al mayor numero de personas posible.</p>
                </div>
                <div className="md:w-3/7">
                    <img src={illustration} alt="Girl showing of her work." className=''/>
                </div>
            </div>
        </div>
    )
}