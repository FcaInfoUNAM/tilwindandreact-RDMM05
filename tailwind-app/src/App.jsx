import './App.css'

function App() {
  return (
    <>
      <nav className="bg-orange-500 p-4 flex justify-around font-semibold text-lg text-white">
        <a href="#" >Inicio</a>
        <a href="#" >Servicios</a>
        <a href="#" >Contacto</a>
      </nav>

      <div className="bg-gray-100 min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between border border-orange-300 h-60">
          <div>
            <h2 className="text-lg font-bold mb-2 text-orange-600">Título 1</h2>
            <p className="text-gray-700 text-sm">Componente card con título, texto y botón.</p>
          </div>
          <button className="mt-4 bg-orange-300 hover:bg-orange-400 text-black font-medium py-1 px-3 rounded">
            Botón 1
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between border border-orange-300 h-60">
          <div>
            <h2 className="text-lg font-bold mb-2 text-orange-600">Título 2</h2>
            <p className="text-gray-700 text-sm">Componente card con título, texto y botón.</p>
          </div>
          <button className="mt-4 bg-orange-300 hover:bg-orange-400 text-black font-medium py-1 px-3 rounded">
            Botón 2
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between border border-orange-300 h-60">
          <div>
            <h2 className="text-lg font-bold mb-2 text-orange-600">Título 3</h2>
            <p className="text-gray-700 text-sm">Componente card con título, texto y botón.</p>
          </div>
          <button className="mt-4 bg-orange-300 hover:bg-orange-400 text-black font-medium py-1 px-3 rounded">
            Botón 3
          </button>
        </div>
      </div>
    </>
  )
}

export default App
