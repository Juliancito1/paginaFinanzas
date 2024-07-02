/* eslint-disable react/prop-types */
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarFinanza } from '../../redux/slices/finanzasSlice';

const EditarLista = ({ finanza, handleUpdate, handleCancelClick }) => {
	const [descripcion, setDescripcion] = useState(finanza.descripcion);
	const [categoria, setCategoria] = useState(finanza.categoria);
	const [monto, setMonto] = useState(finanza.monto);
	const [fecha, setFecha] = useState(finanza.fecha);
	const [tipo, setTipo] = useState(finanza.tipo);
	const listarFinanza = useSelector((state) => state.finanza);
	const dispatch = useDispatch()

	const handleSaveClick = (id) => {
		dispatch(actualizarFinanza({ id, descripcion, categoria, monto, fecha, tipo }));
		handleCancelClick(null)
	};

	return (
		<tr className='text-center'>
			<td className='text-center'>
				<input
					type='text'
					value={descripcion}
					onChange={(e) => setDescripcion(e.target.value)}
					className='p-3 font-semibold text-lg text-neutral-700 w-full text-center'
					required
					maxLength={30}
				/>
			</td>
			<td>
				<select
					onChange={(e) => setCategoria(e.target.value)}
					value={categoria}
					className="p-3 font-semibold text-lg text-neutral-700 w-full text-center"
					name="categoria"
					id="categoria"
					required
				>
					<option value="">Eliga una categoria</option>
					<option value="Impuestos">Impuestos</option>
					<option value="Alquiler">Alquiler</option>
					<option value="Servicios">Servicios</option>
					<option value="Varios">Varios</option>
				</select>
			</td>
			<td>
				<input
					type='number'
					value={monto}
					onChange={(e) => setMonto(e.target.value)}
					className='p-3 font-semibold text-lg text-neutral-700 w-full text-center'
					required
					maxLength={30}
				/>
			</td>
			<td>
				<input
					type='date'
					value={fecha}
					onChange={(e) => setFecha(e.target.value)}
					className='p-3 font-semibold text-lg text-neutral-700 w-full text-center'
					required
				/>
			</td>
			<td>
				<select
					required
					className="p-3 font-semibold text-lg text-neutral-700 w-full text-center"
					name="categoria"
					value={tipo}
					id="categoria"
					onChange={(e) => setTipo(e.target.value)}
				>
					<option>Eliga el tipo</option>
					<option value="Ingreso">Ingreso</option>
					<option value="Gasto">Gasto</option>
				</select>
			</td>
			<td className='flex items-center'>
				<button
					className='bg-green-500 text-white p-2 rounded-xl m-2'
					onClick={() => handleSaveClick(finanza.id, finanza)}>
					<FaCheck />
				</button>
				<button
					className='bg-red-500 text-white p-2 rounded-xl m-2'
					onClick={handleCancelClick}>
					<GiCancel />
				</button>
			</td>
		</tr>
	);
};

export default EditarLista;
