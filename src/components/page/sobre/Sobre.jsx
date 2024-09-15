import { FaCss3, FaHtml5, FaReact, FaSortDown } from 'react-icons/fa6'
import img from '../../../assets/img/abel.png'
import { DiIllustrator, DiJavascript, DiPhotoshop } from 'react-icons/di'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BsBootstrap } from 'react-icons/bs'
import Slider from "react-slick";
import { Slides } from '../../slides/Slides'
import { Typewriter } from 'react-simple-typewriter'
import paralax from '../../../assets/img/Serviços Gráficos.png'
import { SiAdobeaftereffects } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Sobre = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px',
                },
            },
        ],
    };

    return (
        <>
            <section className="max-w-5xl px-6 mx-auto  mb-16 ">
                <div className="border-sky-500 rounded-lg border p-6 mb-12 flex items-center justify-between space-x-8 max-sm:flex-col mt-12">
                    {/* Imagem de perfil com efeito de zoom ao passar o mouse */}
                    <img
                        className="w-60 h-80 rounded-tl-full rounded-b-full hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
                        src={img}
                        alt="Foto Abel"
                    />

                    {/* Seção de descrição */}
                    <div className="flex-1 text-center sm:text-left">
                        <h2 className="text-3xl font-bold text-custom mb-4">Abel Namuele</h2>

                        {/* Texto com máquina de escrever animada */}
                        <p className="text-white mb-4">
                            <Typewriter
                                words={[
                                    'Desenvolvedor web fullstack & Designer gráfico Residente em Angola, Provinicia da Huíla municipio do Lubango.',
                                    'Atualmente atua como desenvolvedor Full-Stack.',
                                    'Ao longo do percurso como Dev já desenvolvi vários projetos para algumas entidades como Web sites, Sistemas para gestão Escolar, Gestão de Pessoas, Gestão de estoque e vendas.',
                                    'Já criei Logo-marcas, Identidade visual para algumas entidades, anúncios publicitários, flyers, Banners para mídias sociais.',
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={60}
                                deleteSpeed={40}
                                delaySpeed={1000}
                            />
                        </p>

                        {/* Descrição adicional */}
                        <p className="text-white">
                            Quanto ao trabalho de Designer gráfico também é uma experiência ótima, pois tem me ajudado bastante quando estou desenvolvendo projetos para Web e não só.
                        </p>
                    </div>
                </div>

                <h1 className='text-center pb-4 text-white font-bold text-xl'>Tecnologias de desenvolvimento</h1>
                <div className='overflow-hidden grid sm:grid-cols-1 lg:grid-cols-3 gap-3 space-x-3'>

                    <div data-aos="fade-right" data-aos-duration="3000" className='p-6 hover:shadow-blue-400 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-blue-400 animate-spin'> <FaReact size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>React</h1>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="3000" className='p-6 hover:shadow-yellow-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-yellow-500'> <DiJavascript size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>JavaScript</h1>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="3000" className='p-6 hover:shadow-red-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-red-500'> <FaHtml5 size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>HTML</h1>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="3000" className='p-6 hover:shadow-blue-600 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-blue-600'> <FaCss3 size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>CSS</h1>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="3000" className='p-6 hover:shadow-sky-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-custom'> <RiTailwindCssFill size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Tailwind CSS</h1>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="3000" className='p-6 p-4 hover:shadow-purple-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-purple-500'> <BsBootstrap size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Bootstrap</h1>
                    </div>
                </div>

                <h1 className='text-center pb-4 text-white font-bold text-xl'>Daum de Design</h1>
                <div className='overflow-hidden grid sm:grid-cols-1 lg:grid-cols-3 gap-3 space-x-3'>

                    <div data-aos="fade-right" data-aos-duration="3000" className='p-6 hover:shadow-blue-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-blue-500'> <DiPhotoshop size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Photoshop</h1>
                    </div>
                    <div data-aos="fade-right" data-aos-duration="e000" className='hover:shadow-orange-500 duration-300 shadow p-6 mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-orange-500'> <DiIllustrator size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Illustrator</h1>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        className="bg-custom-bg p-6 flex flex-col items-center justify-center hover:shadow-xl shadow-lg "
                    >
                        <div className="text-yellow-500">
                            <SiAdobeaftereffects size={80} />
                        </div>
                        <h1 className="text-2xl text-white font-semibold mt-4">After-Effects</h1>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-duration="3000"
                        className="bg-custom-bg p-6 flex flex-col items-center justify-center hover:shadow-xl shadow-lg "
                    >
                        <div className="text-red-600">
                            <FiFigma size={80} />
                        </div>
                        <h1 className="text-2xl text-white font-semibold mt-4">Figma</h1>
                    </div>


                </div>


                {/* Minhas habilidades */}

                <h1 className='text-center pb-4 text-white font-semibold text-xl mb-4'>Alguns trabalhos de design gráfico</h1>

                <div className="space-x-4 p-4">
                    <Slider className='gap-4' {...settings}>
                        {Slides.map((slide, index) => (
                            <div className='p-3' key={index}>
                                <img className='hover:scale-105 duration-300' src={slide} alt={`slide ${index}`} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Um pouco sobre o desenvolvimento */}


            </section>
            <h1 className='text-center pb-4 text-white font-semibold text-xl mb-4'>Habilidades</h1>
            <div className="relative overflow-hidden h-screen bg-fixed bg-cover mb-4  bg-center" style={{ backgroundImage: `url(${paralax})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold"> Obrigado por chegar ate aqui <FaSortDown /> </h1>
                </div>
            </div>

            <div className=" bg-transparent max-w-5xl px-6 mx-auto  mb-16 ">
                <div className="overflow-hidden grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Card para o site Insubornável */}
                    <div className="hover:shadow-lg shadow-md bg-custom-bg rounded-lg transition duration-300 overflow-hidden">
                        {/* Imagem com hover para ocupar todo o card */}
                        <div className="w-full h-60 overflow-hidden">
                            <img
                                src="https://placehold.co/600x400"
                                alt="Insubornável"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Conteúdo do card */}
                        <div className="p-6 flex flex-col items-center justify-center">
                            {/* Título do projeto */}
                            <h1 className="text-2xl text-white font-semibold mb-2">Insubornável</h1>

                            {/* Descrição do projeto */}
                            <p className="text-white text-center mb-4">
                                Foi um dos sites desenvolvido por mim. O mesmo é um site de notícias.
                            </p>

                            {/* Link com botão estilizado */}
                            <Link
                                target="_blank"
                                className="bg-sky-500 hover:bg-sky-600 transition-colors duration-300 text-white font-bold py-2 px-4 rounded-lg"
                                to="https://insubornavel.org/"
                            >
                                Saber mais
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
