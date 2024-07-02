
import { SlideImg } from '../components/SlideImg';
import { FiPlusCircle, FiCheckCircle } from "react-icons/fi";
import { MdOutlineMonetizationOn } from "react-icons/md";
const Home = () => {
  return (
    <div className="mainSection">
      <SlideImg />
      <div className="max-w-7xl mx-auto grid grid-cols-4 items-center my-10">
        <div className='p-6 col-span-3 items-center'>
          <div className='text-3xl text-sky-900 font-bold mb-4'>Responsablemente gestionamos tus finanzas</div>
          <div className='text-gray-700 text-[16px]'>Expedita nulla dicta quam veniam recusandae excepturi quas inventore Lorem ipsum dolor sit amet consectetur adipisicing elit.  Quidem molestias assumenda libero, omnis sapiente! Reiciendis voluptatum quibusdam rerum officia, sit culpa assumenda amet, quos non corrupti odio! Unde dolore explicabo exercitationem repudiandae impedit reprehenderit ut facilis quas iure aspernatur blanditiis totam rem tempore, excepturi voluptates nemo tempora pariatur. Aliquid nisi incidunt minima soluta asperiores esse, sapiente officiis corporis itaque consequatur ducimus.</div>
        </div>
        <div className='col-span-1 mx-auto'>
          <p className='text-9xl text-sky-500 animate-bounce'><MdOutlineMonetizationOn /></p>
        </div>
        <hr className='border-gray-400 w-full my-10 col-span-4' />
        <div className='col-span-1 mx-auto'>
          <p className='text-9xl text-sky-500'><FiPlusCircle /></p>
        </div>
        <div className='p-6 col-span-3'>
          <div className='text-3xl text-sky-900 font-bold mb-4'>Nos encargamos de tu cartera de negocios</div>
          <div className='text-gray-700 text-[16px]'>Sit amet consectetur adipisicing elit. Veniam recusandae excepturi quas inventore quidem molestias assumenda libero, omnis sapiente! Reiciendis voluptatum quibusdam rerum officia, sit culpa assumenda amet, quos non corrupti odio! Unde dolore explicabo exercitationem repudiandae impedit reprehenderit ut facilis quas iure aspernatur blanditiis totam rem tempore, excepturi voluptates nemo tempora pariatur. Aliquid nisi incidunt minima soluta asperiores esse, sapiente officiis corporis itaque consequatur ducimus.</div>
        </div>
        <hr className='border-gray-400 w-full my-10 col-span-4' />
        <div className='p-6 col-span-3 items-center'>
          <div className='text-3xl text-sky-900 font-bold mb-4'>Cuidamos de tus inversiones empresariales</div>
          <div className='text-gray-700 text-[16px]'>Nulla dicta quam veniam recusandae excepturi quas inventore quidem molestias assumenda libero, omnis sapiente! Reiciendis voluptatum quibusdam rerum officia, sit culpa assumenda amet, quos non corrupti odio! Unde dolore explicabo exercitationem repudiandae impedit reprehenderit ut facilis quas iure aspernatur blanditiis totam rem tempore, excepturi voluptates nemo tempora pariatur. Aliquid nisi incidunt minima soluta asperiores esse, sapiente officiis corporis itaque consequatur ducimus.</div>
        </div>
        <div className='col-span-1 mx-auto'>
          <p className='text-9xl text-sky-500'><FiCheckCircle /></p>
        </div>
        <div className='grid-cols-1 grid md:grid-cols-5 col-span-4 mt-14 mb-10'>
          <div className='h-[350px] md:h-[500px] col-span-1 md:col-span-2 bg-neutral-400 text-white text-center content-center'>
            <p className='text-4xl font-bold'>Proyecto Redux Toolkit</p>
            <p className='italic text-3xl mt-2'>Manejo de finanzas - 2024</p>
            <p className='uppercase font-semibold mt-10'>Desarrollado para:</p>
            <img src="./images/RollingCode-Logo-4.svg" alt="" className='w-full px-16' />
          </div>
          <div className='md:h-[500px] md:col-span-3 bg-neutral-200 p-20'>
            <p className='text-5xl font-semibold text-neutral-700'>Grupo 2</p>
            <p className='text-xl uppercase mt-3 text-neutral-700'>Integrantes</p>
            <div className='mt-10'>
              <div className='md:flex items-center font-semibold text-xl text-neutral-700'>
                <img src="./images/julian.jpg" alt="" className='rounded-full h-[80px] mb-6' />
                <p className='md:ml-4 mb-6 md:mb-0 mr-10'>Julián Martín</p>
                <img src="./images/oscar.jpg" alt="" className='rounded-full h-[80px] mb-6' />
                <p className='md:ml-4 mb-6 md:mb-0'>Oscar Frias Viñals</p>
              </div>
              <div className='md:flex items-center font-semibold text-xl text-neutral-700'>
                <img src="./images/nico.jpg" alt="" className='rounded-full h-[80px]' />
                <p className='md:ml-4 mb-6 md:mb-0 mr-10'>Cosme Nicolás Mas</p>
                <img src="./images/fede.jpg" alt="" className='rounded-full h-[80px]' />
                <p className='md:ml-4 mb-6 md:mb-0'>Federico Álvarez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
