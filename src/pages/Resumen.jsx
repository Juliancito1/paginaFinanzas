import { useSelector } from "react-redux";
import { seccionData } from "../utils/seccionData";
export const Resumen = () => {

  const listaFinanzas = useSelector((state) => state.finanzas);
  const totalIngresos = listaFinanzas
    .filter((finanza) => finanza.tipo === "Ingreso")
    .reduce((total, finanza) => total + finanza.monto, 0);

  const totalGastos = listaFinanzas
    .filter((finanza) => finanza.tipo === "Gasto")
    .reduce((total, finanza) => total + finanza.monto, 0);

  const balanceTotal = totalIngresos - totalGastos;

  return (
    <div className="mainSection">
      <div className="bg-cover bg-center h-[400px] content-end pl-6 bg-[url('/images/header.jpg')]">
        <div className="max-w-7xl mx-auto flex flex-col justify-center text-white mb-16">
          <div className=" max-w-md">
            <h1 className="text-6xl font-semibold drop-shadow-lg mb-6">
              {seccionData[2].titulo}
            </h1>
            <p className="mb-6">{seccionData[2].texto}</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 flex items-center justify-center">
        <h1 className="text-3xl text-center font-bold text-sky-900 p-6">Resumen de Transacciones</h1>
      </div>
      <p className="max-w-7xl mx-auto text-center text-[18px] mb-6 px-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique itaque sunt ducimus labore atque omnis, fugit, mollitia sint tenetur necessitatibus reiciendis exercitationem nostrum qui ex eveniet sit et enim laborum debitis consectetur dolorum deleniti molestias quasi? Harum, voluptatum corporis.</p>
      <div className="md:grid md:grid-cols-2 md:gap-10 max-w-7xl mx-auto p-6 text-white">
        <div className="text-6xl font-semibold text-center bg-lime-600 p-10 rounded-xl mb-6 md:mb-2">
          <p>Total de ingresos:</p>
          <hr className="my-8" />
          <p className="font-bold">${totalIngresos}</p>
        </div>
        <div className="text-6xl font-semibold text-center bg-red-600 p-10 rounded-xl mb-6 md:mb-2">
          <p>Total de gastos:</p>
          <hr className="my-8" />
          <p className="font-bold">${totalGastos}</p>
        </div>
        <div className="text-6xl font-semibold text-center md:col-span-2 md:flex justify-center bg-neutral-500 p-10 mb-10 rounded-xl">
          <p>Su balance total es de:</p>
          <hr className="my-8 md:hidden" />
          <p className="ml-6 text-6xl font-bold text-center">${balanceTotal}</p>
        </div>
      </div>
    </div>
  );
};
