/* eslint-disable @next/next/no-img-element */
export default function Nosotros () {
  return (
    <section className='flex justify-center items-center'>
      <article className='flex flex-col md:flex-row mt-10 gap-5 md:gap-10 md:w-2/3 w-full p-5 bg-white shadow-md border border-gray-200 border-solid rounded-md'>
        <div className='flex flex-col gap-4'>
          <p>
            ¡Bienvenido a nuestra tienda!
          </p>
          <p>
            ¡Productos de primera calidad, precios razonables y excelente servicio al cliente nos han convertido en uno de los mejores proveedores de removedores múltiples!
          </p>
          <p>
            La empresa elige únicamente productores de confianza para ofrecer productos de la más alta calidad. Nos preocupamos por nuestros clientes valoran y sus opiniones. Por eso intentamos crear una atmósfera de confianza y honestidad. Esperamos formar relaciones comerciales exitosas con nuevos clientes en todo el mundo.
          </p>
          <p>
            Nuestro servicio de atención al cliente responde todos los correos electrónicos en 1 hora, por lo que cuando se comunique con nosotros no tendrá que esperar y preguntarse si hay alguien al otro lado.
          </p>
        </div>
        <img src='/nosotros.jpg' alt='Imagen sobre nosotros' className='md:w-1/2 h-auto object-cover' />
      </article>
    </section>
  )
}
