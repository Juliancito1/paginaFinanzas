import { LuSearch } from "react-icons/lu";
const Search = ({ search, setSearch }) => {
  return (
    <div className="grid lg:grid-cols-4 bg-neutral-200 px-4 py-3 rounded-3xl mb-6">
      <div className="flex w-full lg:grid-cols-1 items-center">
        <p className="text-2xl mr-2"><LuSearch /></p>
        <p className="text-2xl font-medium italic">
          Busque aquí su transacción:{" "}
        </p>
      </div>

      <input
        type="text"
        placeholder="Buscar movimiento financiero..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 flex lg:col-span-3 rounded-xl ml-4 mr-2"
        maxLength={30}
      />
    </div>
  );
};

export default Search;

