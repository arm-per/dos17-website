import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import Services from "./components/services/Services";
import Home from "./Home";
import Portfolio from "./components/Porfolio/Portoflio";
import BlogEntries from "./components/Blog/BlogEntries";
import Footer from "./components/footer/Footer";
import logo from "./components/header/logotipo.svg";
import { Post } from './components/POST/Post'

import styled from 'styled-components';
import {useEffect} from "react";

import {CustomBanner} from "./components/CustomBanner";
import {CustomPage} from "./components/CustomPage";
import Services from "./components/services/Services";

import cnt from './banners/cnt.png'
import dg from './banners/dg.png'
import mkt from './banners/mkt.png'
import web from './banners/web.png'

const ButtonMenu = styled.button`
    height: 40px;
    padding: 20px;
  color: #BEEE62;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: bold;
  outline: none;
`

const App = () => {


    useEffect(()=>{
        const MenuBtn = document.getElementById('MenuButton'),
            MainMenu = document.getElementById('main-menu');

        let displayed = false

        function displayMenu () {
            displayed = !displayed

            if(displayed){
                MainMenu.style.display = 'block';
            }else {
                MainMenu.style.display = 'none'
            }

        }

        if(window.innerWidth < 1024) MenuBtn.addEventListener('click', displayMenu);
    },[])


    return <>
        <Router>
            <header className="bg-d17-dark sticky top-0 z-30">
                <div className="container mx-auto px-2.5 py-3.5 sm:px-0 flex justify-between items-center">
                    <Link to="/"><figure className="m-0">
                        <img src={logo} alt="" className="w-32"/>
                    </figure></Link>
                    {
                        (window.innerWidth < 1024)?  <ButtonMenu id="MenuButton">Menu</ButtonMenu> : <></>
                    }

                    <nav className="hidden lg:block lg:flex justify-end text-center" id="main-menu">
                        <a href="/#nosotros" className="nav-link hover:text-d17-web-20">Nosotros</a>
                        <a href="/#servicios" className="nav-link hover:text-d17-web-20">Servicios</a>
                        <Link to="/Portafolio" className="nav-link hover:text-d17-web-20">Portafolio</Link>
                        <Link to="/Blog" className="nav-link hover:text-d17-web-20">Blog</Link>
                        <a href="/#Contacto" className="nav-link hover:text-d17-web-20">Contacto</a>
                        <a href="/#Contacto" className="nav-link-principal hover:bg-d17-web-20">Cotiza tu proyecto</a>
                    </nav>
                </div>
            </header>
            <Switch>
                <Route path="/Marketing">
                    <CustomBanner image={mkt}/>
                    <CustomPage id={1}/>
                    <Services/>
                </Route>
                <Route path="/Design">
                    <CustomBanner image={dg}/>
                    <CustomPage id={2}/>
                    <Services/>
                </Route>
                <Route path="/Contenido">
                    <CustomBanner image={cnt}/>
                    <CustomPage id={3}/>
                    <Services/>
                </Route>
                <Route path="/Web">
                    <CustomBanner image={web}/>
                    <CustomPage id={4}/>
                    <Services/>
                </Route>
                <Route path="/Portafolio">
                    <Portfolio/>
                </Route>
                <Route path="/Blog">
                    <BlogEntries/>
                </Route>
                <Route path="/Cotizador">
                    <h1>Hola desde el cotizador</h1>
                </Route>
                <Route path="/post">
                    <Post/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
        <Footer/>



        </>
}

export default App;
