import { Link } from 'react-router-dom'
import img from '../../../assets/img/abel.png'

export const Home = () => {

    return (
        <div className='max-w-5xl px-6 mx-auto '>
            <div className="mt-12">
                <div className='flex mb-16  max-sm:flex-col items-center justify-between '>
                    <img className='hover:backdrop-saturate-150 bg-cover bg-center  overflow-hidden w-70 h-96  rounded-tl-full  rounded-b-full  
                      hover:scale-105 duration-300 transition-all ease-in-out hover:rounded-tl-full '
                        src={img} alt="Foto Abel" />

                                       <div className='w-70   max-sm:w-40'>
                        <h4 style={{ fontFamily: "cursive" }} className='text-xl font-snm text-white'>Olá eu sou Abel Namuele  </h4>
                        <h1 className='text-custom max-sm:text-4xl font-semibold text-4xl'> Desenvolvedor WEB Fullstack & </h1>
                        <h2 className='mb-4 text-white max-sm:text-4xl font-semibold text-5xl'> DESIGNER GRÀFICO </h2>
                    </div>
                </div>

                <div style={{ fontFamily: "cursive" }} className='font mb-20 w-80 mx-auto text-center flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='text-white text-xl '>Sejá bem vindo ao meu Portflio</h1>
                    <p className='text-white'> Onde vais poder saber um pouco de mim e dos meus trabalhos já realizado
                        tanto como <strong>Dev</strong> &  <strong> Designer gráfico </strong>  </p>
                    <Link to={"/sobre"} className='relative transition-colors before:absolute before:top-0 before:left-0 before:-z-10 before:h-full before:w-full before:origin-bottom-left before:scale-x-0 before:bg-sky-800 before:transition-transform before:duration-300 before:content-[""] before:hover:scale-x-100  hover:bg-sky-500 duration-300 border-sky-700 border px-6 p-2 rounded text-white '> Saiba-mais </Link>
                </div>


            </div>
        </div>
    )
}
