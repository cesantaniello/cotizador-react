import Formulario from "./Formulario"

const AppSeguro = () => {
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Cotizador de seguros de auto</h1>
        </header>
        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadows rounded-lg p-10">
            <Formulario/>
        </main>
    </>
  )
}

export default AppSeguro