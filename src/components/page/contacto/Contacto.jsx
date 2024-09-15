import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6"
import { Link } from "react-router-dom"

export const Contacto = () => {


    return (
        <div className="max-w-5xl mx-auto">


            <section className=" px-6  mt-16 ">
                <div className="p-8">
                    <h1 className="text-white text-xl font-semibold mb-4">Nossas redes socias</h1>
                    <div className="flex-wrap flex items-center justify-between gap-3">
                        <Link to="https://www.facebook.com/?zero_e=4&zero_et=1718784554&paipv=0&eav=Afb5DUz-2-soy_u3y3KUcYE9QCWl1HFWBkSxmPoC8p8ShuGzoOLTbhl6JYHzy4Ug2Q8&_rdr" target="_blanck" className="text-white space-y-4 flex rounded-full items-center justify-center flex-col bg-custom-bg p-4">
                            <FaFacebook className="duration-300 hover:scale-125 hover:rotate-6" size={30} />
                        </Link>
                        <Link to={"#"} className="text-white space-y-4 flex rounded-full items-center justify-center flex-col bg-custom-bg p-4">
                            <FaInstagram className="duration-300 hover:scale-125 hover:rotate-6" size={30} />
                        </Link>

                        <Link to={"#"} className="text-white   flex rounded-full items-center justify-center flex-col bg-custom-bg p-4">
                            <FaLinkedin className="duration-300 hover:scale-125 hover:rotate-6" size={30} />
                        </Link>


                    </div>
                </div>
            </section>

            <section className=" px-6  mt-16 mb-40 ">
                <div className="p-8">
                    <h1 className="text-white text-lg  mb-4"> Obrigado por visitar meu Pórtfolio
                        espero que tenhas tido uma boa experiência em quanto navegavas pelo mesmo
                        volte sempre. </h1>
                   
                </div>
            </section>
        </div>
    )
}
