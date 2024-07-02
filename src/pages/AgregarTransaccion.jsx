import { useState } from "react";
import { seccionData } from "../utils/seccionData";
import { Link, useNavigate } from "react-router-dom";
import { finanzas } from "../redux/slices/finanzasSlice";
import { useDispatch } from "react-redux";

const AgregarTransaccion = () => {
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [monto, setMonto] = useState("");
  const [fecha, setFecha] = useState(null);
  const [tipo, setTipo] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handleTransaccion = (e) => {
    e.preventDefault();
    navigate('/')

    const nuevaTransaccion = {
      id: Math.floor(Math.random() * 1000),
      descripcion,
      categoria,
      monto,
      fecha,
      tipo
    }

    dispatch(finanzas(nuevaTransaccion))
  };

  return (
    <section className="font-Titilium mainSection">
      <div className="bg-cover bg-center h-[400px] content-end pl-6 bg-[url('/images/header1.jpg')]">
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-white mb-16">
          <div className=' max-w-lg'>
            <h1 className="text-6xl font-semibold drop-shadow-lg mb-6">
              {seccionData[0].titulo}
            </h1>
            <p className="mb-6">{seccionData[0].texto}</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-5 gap-10 pl-6 mb-16">
        <div className="col-span-2">
          <h1 className="py-4 text-sky-900 text-3xl font-bold">Completá el formulario, agregá una transacción y empezá a operar</h1>
          <p>Harum recusandae ducimus beatae reiciendis facere nisi repudiandae laboriosam numquam mollitia dolor minima distinctio cum aspernatur ea non, corrupti molestiae aliquam. Delectus, molestiae recusandae, beatae alias inventore at perspiciatis, in rerum quibusdam nesciunt saepe fugit sequi voluptates! Voluptas fugit officiis ab nihil voluptatibus, deserunt, dolorum eius laborum voluptates mollitia architecto dolor corrupti.</p>
          <p className="mt-3 italic">Ipsum orem dolor sit amet, consectetur adipisicing elit. Earum, corrupti eaque. Similique quos ea perspiciatis libero velit quam sunt. Culpa vel dolorum minus!</p>
        </div>
        <div className="col-span-3 bg-neutral-200 p-6 rounded-lg">
          <form className="text-[18px]" onSubmit={handleTransaccion}>
            <p className="uppercase font-bold text-sky-700 text-3xl pb-4">Nueva transacción</p>
            <label className="flex bg-neutral-500 text-white w-fit ml-2 px-4 rounded-t-md">Descripcion</label>
            <input
              className="w-full placeholder:italic h-10 rounded-lg p-2"
              type="text"
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Describa la transacción"
              maxLength={45}
            />
            <label className="flex bg-neutral-500 text-white w-fit ml-2 px-4 mt-3 rounded-t-md">Categoria<strong>*</strong></label>
            <select
              onChange={(e) => setCategoria(e.target.value)}
              required
              className="w-full h-10 rounded-lg p-2 bg-neutral-300"
              name="categoria"
              id="categoria"
            >
              <option value="">Eliga una categoria</option>
              <option value="Impuestos">Impuestos</option>
              <option value="Alquiler">Alquiler</option>
              <option value="Servicios">Servicios</option>
              <option value="Varios">Varios</option>
            </select>
            <label className="flex bg-neutral-500 text-white w-fit ml-2 px-4 mt-3 rounded-t-md">Monto*</label>
            <input
              required
              className="w-full placeholder:italic h-10 rounded-lg p-2"
              type="number"
              min={0}
              onChange={(e) => setMonto(e.target.value)}
              placeholder="Ingrese el monto de la transacción"	
              maxLength={45}
            />
            <label className="flex bg-neutral-500 text-white w-fit ml-2 px-4 mt-3 rounded-t-md">Fecha*</label>
            <input
              required
              className="w-full h-10 rounded-lg p-2"
              type="date"
              onChange={(e) => setFecha(e.target.value)}
            />
            <label className="flex bg-neutral-500 text-white w-fit ml-2 px-4 mt-3 rounded-t-md">Tipo*</label>
            <select
              required
              className="w-full h-10 rounded-lg p-2 bg-neutral-300"
              name="categoria"
              id="categoria"
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">Elija el tipo</option>
              <option value="Ingreso">Ingreso</option>
              <option value="Gasto">Gasto</option>
            </select>
            <hr />
            <button type="submit" className="w-full bg-sky-600 text-white rounded-lg p-2 mt-3 font-bold hover:bg-sky-800">
              Realizar Transacción
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AgregarTransaccion;
