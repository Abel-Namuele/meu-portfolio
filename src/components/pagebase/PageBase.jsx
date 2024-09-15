import { Outlet } from "react-router-dom"
import { Container } from "../container/Container"
import Header from "../header/Header"
import Footermod from "../footer/Footermod"
import { BtnWhatsapp } from "../btnWhatsapp/BtnWhatsapp"

const PageBase = () => {
  return (
    <div className="bg_home">
    <Header />
    <Container>
        <Outlet />
    <Footermod />
    </Container>
    <BtnWhatsapp />
    </div>
  )
}

export default PageBase