import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"


export const BtnWhatsapp = () => {
  return (
    <div className="">
      <Link to="https://wa.me//+244944690252" target="_blank" aria-label="Whatsapp" className="rounded-full  bg-green-600 hover:bg-green-800 duration-300 fixed z-50 right-4 bottom-4  p-2 text-white"> <FaWhatsapp  size={30} /> </Link>
    </div>
  )
}
