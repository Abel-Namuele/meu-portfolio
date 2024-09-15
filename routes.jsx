import { Routes, Route, HashRouter } from "react-router-dom"
import PageBase from "./src/components/pagebase/PageBase"
import { Home } from './src/components/page/home/Home'
import { Sobre } from "./src/components/page/sobre/Sobre"
import { Contacto } from "./src/components/page/contacto/Contacto"
import Page404 from "./src/components/page/page404/Page404"

export const Approutes = () => {
  return (

    <HashRouter>
      <Routes>
        <Route path="/" element={<PageBase />} >
          <Route index element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </HashRouter>

  )
}
