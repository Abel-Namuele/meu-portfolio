import { useState } from "react"
import { BiHome } from "react-icons/bi"
import { BsInfo } from "react-icons/bs"
import { FaList } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import { Link } from "react-router-dom"

const Header = () => {

    const [showMenu, setShowMenu] = useState(false)
    const toggler = () => {
        setShowMenu(!showMenu)
    }


    return (
        <header className="bg-secondary shadow-xl  sticky top-0 bottom-0 left-0 ">
            <div className="max-w-5xl mx-auto  flex items-center justify-between h-16 px-6">
                <div>
                    <Link to={"/"} style={{ fontFamily: "revert-layer" }}
                        className="text-white text-2xl hover:scale-x-90  duration-300 flex">
                        Portfólio
                    </Link>
                </div>

                <div onClick={toggler} className="sm:hidden flex"> <button className="hover:scale-x-105 text-white duration-200 hover:bg-sky-800 bg-sky-900 p-2 rounded"> <FaList /> </button> </div>

                <div onClick={showMenu} className="space-x-4 hidden sm:flex">
                    <Link className=" text-gray-100 hover:text-gray-400 hover:scale-x-105  duration-300 flex items-center gap-2" to={"/"}> <BiHome /> home</Link>
                    <Link className=" text-gray-100 hover:text-gray-400 hover:scale-x-105  duration-300 flex items-center gap-2" to={"/sobre"}> <BsInfo /> sobre-me</Link>
                    <Link className=" text-gray-100 hover:text-gray-400 hover:scale-x-105  duration-300 flex items-center gap-2" to={"/contacto"}> <IoCall /> contacto</Link>
                </div>
            </div>
            {showMenu &&
                <div onClick={showMenu} className="space-y-2 pb-4 px-8 duration-300 transition-all ">
                    <Link className="flex items-center gap-2 text-gray-100 hover:text-gray-400 hover:scale-x-105 duration-300" to={"/"}> <BiHome /> home</Link>
                    <Link className="flex items-center gap-2 text-gray-100 hover:text-gray-400 hover:scale-x-105 duration-300" to={"/sobre"}> <BsInfo /> sobre-me</Link>
                    <Link className="flex items-center gap-2 text-gray-100 hover:text-gray-400 hover:scale-x-105 duration-300" to={"/contacto"}> <IoCall />contacto</Link>
                </div>
            }

        </header>
    )
}

export default Header