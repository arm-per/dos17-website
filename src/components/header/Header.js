import logo from './logotipo.svg';

const Header = () => {

    return <header className="bg-d17-dark sticky top-0 z-30">
        <div className="container mx-auto px-2.5 py-3.5 sm:px-0 lg:flex justify-between items-center">
            <figure className="m-0">
                <img src={logo} alt="" className="w-32"/>
            </figure>
            <nav className="hidden lg:block lg:flex justify-end text-center">
                <a href="https://dos17.digital" className="nav-link hover:text-d17-web-20">Nosotros</a>
                <a href="https://dos17.digital" className="nav-link hover:text-d17-web-20">Servicios</a>
                <a href="https://dos17.digital" className="nav-link hover:text-d17-web-20">Portafolio</a>
                <a href="https://dos17.digital" className="nav-link hover:text-d17-web-20">Blog</a>
                <a href="https://dos17.digital" className="nav-link hover:text-d17-web-20">Contacto</a>
                <a href="https://dos17.digital" className="nav-link-principal hover:bg-d17-web-20">Cotiza tu proyecto</a>
            </nav>
        </div>
    </header>
}

export default Header;
