import Logo from '../assets/rflogo.svg';
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiLinkedinBoxLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";

export const Footer = () => {
   return (
      <div className='mx-auto bg-neutral-600 w-full pt-8 px-6 font-Titilium'>
         <div className=" max-w-7xl mx-auto justify-between md:grid md:grid-cols-4 sm:gap-12 mb-6">
            <div className='mb-6'>
               <p className="text-white font-bold text-[16px] pb-6">Seguinos en nuestras redes</p>
               <div className='text-white grid grid-cols-4 md:grid-cols-1 '>
                  <div className='flex'>
                     <RiFacebookBoxLine className='mr-3 text-[30px]' />
                     <span className='text-lg font-medium'>Facebook</span>
                  </div>
                  <div className='flex md:mt-2'>
                     <RiLinkedinBoxLine className='mr-3 text-[30px]' />
                     <span className='text-lg font-medium'>Linkedin</span>
                  </div>
                  <div className='flex md:mt-2'>
                     <RiTwitterLine className='mr-3 text-[30px]' />
                     <span className='text-lg font-medium'>Twitter</span>
                  </div>
                  <div className='flex md:mt-2'>
                     <RiInstagramLine className='mr-3 text-[30px]' />
                     <span className='text-lg font-medium'>Instagram</span>
                  </div>
               </div>
               <p className="text-white font-bold text-[16px] pb-2 mt-4">Donde dirigirte</p>
               <p className='text-white font-medium text-[12px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti minus ipsum sint.</p>

            </div>
            <div className="col-span-2 mb-6">
               <p className="text-white font-bold text-[16px] pb-6">Donde nos encontramos?</p>
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d113916.68196091263!2d-65.19162314314163!3d-26.84325006348479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719623037969!5m2!1ses-419!2sar" width="100%" height="250"></iframe>
            </div>
            <div className="content-center">
               <p className="text-white italic font-normal text-sm pr-4">Dolorum nostrum aperiam illo minima dicta  eveniet molestiae eaque et possimus similique quia, iusto sapiente accusamus consectetur quis unde. Incidunt facilis odit provident hic unde possimus nemo, nisi fuga non similique magnam saepe commodi sint quae a assumenda consequatur eius. Repellat, eveniet possimus tempore eligendi deleniti autem magni consectetur et sit corporis quasi odio placeat, quisquam veritatis?</p>
               <Link
                  to='/'
                  className=''>
                  <img src={Logo} alt="logo" className='w-[220px] mt-10' />
               </Link>
            </div>
         </div>
         <hr className='border-gray-300 max-w-7xl mx-auto' />
         <p className="text-white text-center uppercase text-sm p-6">© 2024. All rights reserved - Powered by Grupo 2</p>
         <div>
         </div>

      </div>
   )
};

export default Footer
