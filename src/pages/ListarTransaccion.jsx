import {  useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
// import Search from '../components/ListarFinanzas/Search';
import { seccionData } from "../utils/seccionData";
import { useDispatch, useSelector } from "react-redux";
import EditarLista from "../components/ListaFinanzas/EditarLista";
import Search from "../components/ListaFinanzas/Search";
import { borrarFinanza } from "../redux/slices/finanzasSlice";


export const ListarTransaccion = () => {
  const [editingFinanzaId, setEditingFinanzaId] = useState(null);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const listaFinanzas =  useSelector((state) => state.finanzas);
  const handleEditClick = (id) => {
    setEditingFinanzaId(id);
  };

  const handleCancelClick = () => {
    setEditingFinanzaId(null);
  };

  const handleDelete = (id) => {
   dispatch(borrarFinanza({id}))
  }

  

  const filtrarFinanza = listaFinanzas ? listaFinanzas.filter((finanza)=> 
      finanza.categoria.toLowerCase().includes(search.toLowerCase()) 
): listaFinanzas

console.log(filtrarFinanza)

  return (
    <div className="font-Titilium mainSection">
      <div className="bg-cover bg-center h-[400px] content-end pl-6 bg-[url('/images/header2.jpg')]">
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-white mb-16">
          <div className=" max-w-md">
            <h1 className="text-6xl font-semibold drop-shadow-lg mb-6">
              {seccionData[1].titulo}
            </h1>
            <p className="mb-6">{seccionData[1].texto}</p>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-w-7xl mx-auto mt-4 p-6">
        <Search search={search} setSearch={setSearch} />
        <h1 className=" text-sky-900 text-3xl font-bold text-center mb-4">Listado de transacciones</h1>
        <p className="text-center text-[18px] mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique itaque sunt ducimus labore atque omnis, fugit, mollitia sint tenetur necessitatibus reiciendis exercitationem nostrum qui ex eveniet sit et enim laborum debitis consectetur dolorum deleniti molestias quasi? Harum, voluptatum corporis.</p>
        <table className="w-full mb-10">
          <thead className=" text-center bg-neutral-500 text-white">
            <tr className="">
              <th className="font-semibold text-xl p-2 ">Descripcion</th>
              <th className="font-semibold text-xl p-2 border-gray-300 border-x-2">Categoria</th>
              <th className="font-semibold text-xl p-2 border-gray-300 border-x-2">Monto</th>
              <th className="font-semibold text-xl p-2 border-gray-300 border-x-2">Fecha</th>
              <th className="font-semibold text-xl p-2 border-gray-300 border-x-2">Tipo</th>
              <th className="font-semibold text-xl p-2 ">Acciones</th>
            </tr>
          </thead>
          <tbody className="">
            {filtrarFinanza.length > 0 ? (
              filtrarFinanza.map((finanza) =>
                editingFinanzaId === finanza.id ? (
                  <EditarLista
                    key={finanza.id}
                    finanza={finanza}
                    handleUpdate={(updatedFinanza) => {
                      handleUpdate(updatedFinanza);
                      setEditingFinanzaId(null);
                    }}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <tr
                    key={finanza.id}
                    className="even:bg-slate-200 even:hover:bg-slate-300 odd:bg-white odd:hover:bg-slate-100 text-center"
                  >
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <p>{finanza.descripcion}</p>
                    </td>
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <p>{finanza.categoria}</p>
                    </td>
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <p>{finanza.monto}</p>
                    </td>
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <p>{finanza.fecha}</p>
                    </td>
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <p>{finanza.tipo}</p>
                    </td>
                    <td className="p-3 font-semibold text-lg text-neutral-700">
                      <button
                        className="btn btn-warning me-3"
                        onClick={() => handleEditClick(finanza.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(finanza.id, finanza)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan="5" className="">
                  <h1 className="">Sin movimientos para mostrar</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
