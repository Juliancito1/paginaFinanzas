import { useState } from 'react';
import { Link } from 'react-router-dom';
import { seccionData } from '../utils/seccionData';

export const SlideImg = () => {
    const [slideActual, setSlideActual] = useState(0);

    const handleSlideChange = (index) => {
        setSlideActual(index);
    };


    // const currentSlideData = slideData[currentSlide];
    const slideActualData = seccionData[slideActual];
    return (
        <div>
            <div>
                <div>
                    <div
                        className="bg-cover bg-center h-[600px] content-end"
                        style={{
                            backgroundImage: `url(${slideActualData.image})`,
                        }}
                    >
                        <div className="max-w-7xl mx-auto flex flex-col justify-center text-white text-end items-end mb-16">
                            <div className=' max-w-md'>

                                <h1 className="text-6xl font-semibold drop-shadow-lg mb-6">
                                    {slideActualData.titulo}
                                </h1>
                                <p className="mb-6">{slideActualData.texto}</p>
                                <Link className='bg-sky-500 px-4 py-2 mb-4 font-bold text-[16px] uppercase rounded w-fit drop-shadow-lg' to={slideActualData.link}>{slideActualData.boton}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-200">
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3'>
                    {seccionData.map((slide, index) => (
                        <div key={index} className="col-1">
                            <button
                                className="w-full h-20 text-gray-700 hover:bg-sky-950 hover:text-white font-bold"
                                onClick={() => handleSlideChange(index)}
                            >
                                {slide.boton}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
