import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import Services from "./components/services/Services";
import Home from "./Home";
import Marketing from "./Marketing";
import Footer from "./components/footer/Footer";
import logo from "./components/header/logotipo.svg";

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
                        <Link to="/Contacto" className="nav-link hover:text-d17-web-20">Contacto</Link>
                        <Link to="/Cotizador" className="nav-link-principal hover:bg-d17-web-20">Cotiza tu proyecto</Link>
                    </nav>
                </div>
            </header>
            <Switch>
                <Route path="/Nosotros">
                    <h1>Hola desde nosotros</h1>
                </Route>
                <Route path="/Marketing">
                    <Marketing/>
                </Route>
                <Route path="/Design">
                    <h1>Hola desde Diseño</h1>
                </Route>
                <Route path="/Contenido">
                    <h1>Hola desde Contenido</h1>
                </Route>
                <Route path="/Web">
                    <h1>Hola desde Web</h1>
                </Route>
                <Route path="/Portafolio">
                    <h1>Hola desde portafolio</h1>
                </Route>
                <Route path="/Blog">
                    <h1>Hola desde blog</h1>
                </Route>
                <Route path="/Contacto">
                    <h1>Hola desde contacto</h1>
                </Route>
                <Route path="/Cotizador">
                    <h1>Hola desde el cotizador</h1>
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
