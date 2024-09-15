import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa6'
import img from '../../../assets/img/abel.png'
import { DiJavascript } from 'react-icons/di'
import { RiTailwindCssFill } from 'react-icons/ri'
import { BsBootstrap } from 'react-icons/bs'
import Slider from "react-slick";
import { Slides } from '../../slides/Slides'
import { Typewriter } from 'react-simple-typewriter'
import paralax from '../../../assets/img/Serviços Gráficos.png'

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
                <div className='border-sky-500 rounded-lg border p-4 max-sm:flex-col mb-10 flex items-center justify-between space-x-4 mt-12'>
                    <img
                        className='hover:backdrop-saturate-150 bg-cover overflow-hidden w-70 h-80 rounded-tl-full rounded-b-full hover:scale-105 mr-10 duration-300 transition-all ease-in-out hover:rounded-tl-full'
                        src={img}
                        alt="Foto Abel"
                    />

                    <div className='w-70 max-sm:w-70'>
                        <h2 className='text-2xl font-semibold max-sm:text-center text-custom'> Abel Namuele </h2>
                        <p className='text-white max-sm:text-center w-70 mb-2'>
                            <Typewriter
                                words={[
                                    'Desenvolvedor web fullstack & Designer gráfico Residente em Angola, Provinicia da Huíla municipio do Lubango.',
                                    'Atualmente atua como desenvolvedor Full-Stack.',
                                    'Ao longo do percurso em quanto Dev já desenvolvi vários projetos para algumas entidades como Web sites, Sistemas para gestão Escolar, Gestão de Pessoas, Gestão de estoque e vendas.',
                                    'Já criei Logo-marcas, Identidade visual para algumas entidades, anúncios publicitários, flyers, Banners para mídias sociais.'
                                ]}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>

                        <p className='text-white max-sm:text-center w-70'>
                            Quanto ao trabalho de Designer gráfico também é uma experiência ótima, pois tem me ajudado bastante quando estou desenvolvendo projetos para Web e não só.
                        </p>
                    </div>
                </div>

                <h1 className='text-center pb-4 text-white font-bold text-xl'>Tecnologias de desenvolvimento</h1>
                <div className='overflow-hidden grid sm:grid-cols-1 lg:grid-cols-3 gap-3 space-x-3'>

                    <div data-aos="fade-right" data-aos-duration="4000" className='hover:shadow-blue-400 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-blue-400 animate-spin'> <FaReact size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>React</h1>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="4000" className='hover:shadow-yellow-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-yellow-500'> <DiJavascript size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>JavaScript</h1>
                    </div>

                    <div data-aos="fade-right" data-aos-duration="4000" className='hover:shadow-red-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-red-500'> <FaHtml5 size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>HTML</h1>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="4000" className='hover:shadow-blue-600 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-blue-600'> <FaCss3 size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>CSS</h1>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="4000" className='hover:shadow-sky-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-custom'> <RiTailwindCssFill size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Tailwind CSS</h1>
                    </div>

                    <div data-aos="fade-down" data-aos-duration="4000" className='p-4 hover:shadow-purple-500 duration-300 shadow mb-4 pb-4 bg-custom-bg flex items-center justify-center flex-col'>
                        <div className='text-purple-500'> <BsBootstrap size={80} /> </div>
                        <h1 className='text-2xl text-white font-semibold'>Bootstrap</h1>
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
            </section>

            {/* Um pouco sobre o desenvolvimento */}

            <h1 className='text-center pb-4 text-white font-semibold text-xl mb-4'>Habilidades</h1>
            <div className="relative overflow-hidden h-screen bg-fixed bg-cover  bg-center" style={{ backgroundImage: `url(${paralax})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold">Texto no efeito Parallax</h1>
                </div>
            </div>

            <div className="h-screen flex items-center justify-center bg-gray-100">
                <p className="text-3xl">Conteúdo após o efeito Parallax</p>
            </div>

        </>
    )
}
