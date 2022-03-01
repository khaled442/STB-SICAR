import { useState } from "react";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import ResSociale from "./components/responsabiltéSociale/ResSociale";
import Real from "./components/realisations/Real";
// import Funds from "./components/funds/Funds";


function App() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      { openMenu ? <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu}/> : null}
    <div className="sections">

        <Intro/>
        {/* <Funds/> */}
        <ResSociale/>
        <Real/>
        <Contact/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
