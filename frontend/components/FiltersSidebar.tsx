"use client";

import {
  GENEROS,
  MARCAS,
  AROMAS,
} from "@/lib/filters";

interface FiltersSidebarProps {
  genero: string;
  setGenero: (value: string) => void;

  marca: string;
  setMarca: (value: string) => void;

  aroma: string;
  setAroma: (value: string) => void;

  precioMax: number;
  setPrecioMax: (value: number) => void;
}

export function FiltersSidebar({
  genero,
  setGenero,
  marca,
  setMarca,
  aroma,
  setAroma,
  precioMax,
  setPrecioMax,
}: FiltersSidebarProps) {
  return (
    <aside className="w-full md:w-72 bg-white border rounded-2xl p-6 space-y-6 shadow-sm h-fit">

      {/* TITULO */}
      <div>
        <h2 className="text-2xl font-bold">
          Filtros
        </h2>

        <p className="text-sm text-gray-500">
          Encuentra tu perfume ideal
        </p>
      </div>

      {/* GENERO */}
      <div className="space-y-2">
        <label className="font-medium">
          Género
        </label>

        <select
          value={genero}
          onChange={(e) =>
            setGenero(e.target.value)
          }
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">
            Todos
          </option>

          {GENEROS.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* MARCA */}
      <div className="space-y-2">
        <label className="font-medium">
          Marca
        </label>

        <select
          value={marca}
          onChange={(e) =>
            setMarca(e.target.value)
          }
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">
            Todas
          </option>

          {MARCAS.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* AROMA */}
      <div className="space-y-2">
        <label className="font-medium">
          Aroma
        </label>

        <select
          value={aroma}
          onChange={(e) =>
            setAroma(e.target.value)
          }
          className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">
            Todos
          </option>

          {AROMAS.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* PRECIO */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="font-medium">
            Precio máximo
          </label>

          <span className="text-sm font-semibold">
            ${precioMax}
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={300}
          step={5}
          value={precioMax}
          onChange={(e) =>
            setPrecioMax(Number(e.target.value))
          }
          className="w-full"
        />
      </div>

      {/* BOTON LIMPIAR */}
      <button
        onClick={() => {
          setGenero("");
          setMarca("");
          setAroma("");
          setPrecioMax(300);
        }}
        className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
      >
        Limpiar filtros
      </button>
    </aside>
  );
}