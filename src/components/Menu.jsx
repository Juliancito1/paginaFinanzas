import { Link } from 'react-router-dom';
import Logo from '../assets/rflogo.svg';
import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";
import { useState } from 'react';
export const Menu = () => {
	const [close, setClose] = useState(true);
	const handleClose = () => setClose(!close);

	return (
		<div className='flex bg-gradient-to-b from-slate-900 to-[#071836] pt-8 pr-6 shadow-lg w-full mx-auto sticky top-0 font-Titilium z-20'>
			<div className='max-w-7xl w-full  mx-auto'>
				<div className='flex pl-6 justify-between '>
					<Link to='/' className=''>
						<img src={Logo} alt="logo" className='w-[300px] mb-6 fill-white' />
					</Link>
					<div className='justify-between hidden sm:block'>
						<div className='flex text-white items-end text-right justify-center'>
							<Link className='mr-6 hover:font-bold' to='/agregarTransaccion'>Agregar Transacción</Link>
							<Link className='mr-6 hover:font-bold' to='/listarTransaccion'>Lista de Transacciones</Link>
							<Link className='hover:font-bold' to='/resumen'>Resumen de Transacciones</Link>
						</div>
					</div>
					<div className='block sm:hidden'>
						
						<button className='text-2xl font-bold text-white block sm:hidden flex items-center mr-5' onClick={handleClose}>
						<div className='text-white text-2xl font-medium ml-5 mr-2'>Menu</div>
							{close ? <RiCloseLargeFill /> : <RiMenu3Line /> }</button>
					</div>
				</div>

				{close ? <div className='flex sm:hidden flex-col text-center text-neutral-700 font-semibold text-lg bg-transparent-[1] bg-neutral-200 p-6'>
					
					<Link className='pb-3 hover:font-bold' to={'/agregarTransaccion'}>Agregar Transacción</Link>
					<hr  className='border-neutral-400 pt-3' />
					<Link className='pb-3 hover:font-bold' to={'/listarTransaccion'}>Lista de Transacciones</Link>
					<hr  className='border-neutral-400 pt-3' />
					<Link className='pb-3 hover:font-bold' to={'/resumen'}>Resumen de Transacciones</Link>
				</div> : null}
			</div>
			<div>

			</div>
		</div>
	);
};

export default Menu
