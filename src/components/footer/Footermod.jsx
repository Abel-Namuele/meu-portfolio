import { BsArrowUp } from "react-icons/bs"

const Footermod = () => {

    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className="bg-custom-bg ">
            <div className="max-w-5xl mx-auto px-6 p-4 flex items-center justify-between ">
                <div className="">
                    <button onClick={backTop} className="text-white p-2  flex items-center justify-center flex-col"> <BsArrowUp size={20} /> topo</button>
                </div>
                <p className="text-custom">&copy; Abel Namuele </p>
                <p className="text-white text-center">todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footermod