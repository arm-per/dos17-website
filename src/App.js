import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import Services from "./components/services/Services";
import Home from "./Home";
import Marketing from "./components/Marketing/Marketing";
import Portfolio from "./components/Porfolio/Portoflio";
import Web from "./components/Web/Web";
import Content from "./components/Content/Content";
import Diseno from "./components/Diseno/Diseno";
import BlogEntries from "./components/Blog/BlogEntries";
import Footer from "./components/footer/Footer";
import logo from "./components/header/logotipo.svg";
import { Post } from './components/POST/Post'

const App = () => {


    return <>
        <Router>
            <header className="bg-d17-dark sticky top-0 z-30">
                <div className="container mx-auto px-2.5 py-3.5 sm:px-0 lg:flex justify-between items-center">
                    <Link to="/"><figure className="m-0">
                        <img src={logo} alt="" className="w-32"/>
                    </figure></Link>
                    <nav className="hidden lg:block lg:flex justify-end text-center">
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
                    <Marketing/>
                </Route>
                <Route path="/Design">
                    <Diseno/>
                </Route>
                <Route path="/Contenido">
                    <Content/>
                </Route>
                <Route path="/Web">
                    <Web/>
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
