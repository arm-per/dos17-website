import logo from '../header/logotipo.svg';

const Footer = () => {

    return <>
        <footer className="bg-d17-dark mt-8">
            <div className="pt-4 sm:pt-0 container mx-auto grid text-center sm:grid-cols-3 sm:text-left md:grid-cols-4 gap-2.5">
                <nav className="py-2.5 sm:py-8 sm:pl-5">
                    <h3 className="text-d17-web-50 text-xl">Mapa del sitio</h3>
                    <a className="block text-d17-white hover:underline py-1" href="/">Inicio</a>
                    <a className="block text-d17-white hover:underline py-1" href="index.html">Servicios</a>
                    <a className="block text-d17-white hover:underline py-1" href="index.html">Portafolio</a>
                    <a className="block text-d17-white hover:underline py-1" href="index.html">Nosotros</a>
                </nav>

                <nav className="py-2.5 sm:py-8 sm:pl-5">
                    <h3 className="text-d17-web-50 text-xl">Impulsa tu proyecto</h3>
                    <a className="block text-d17-white hover:underline py-1" href="index.html"> Contacto </a>
                    <a className="block text-d17-white hover:underline py-1" href="index.html">Cotiza tu proyecto</a>
                    <h3 className="text-d17-web-50 text-xl">Privacidad</h3>
                    <a className="block text-d17-white hover:underline py-1" href="index.html"> Política de privacidad </a>
                </nav>

                <nav className="py-2.5 sm:py-8 sm:pl-5">
                    <h3 className="text-d17-web-50 text-xl">Síguenos</h3>
                    <a className="block text-d17-white hover:underline py-1" href="Contacto"> Facebook </a>
                    <a className="block text-d17-white hover:underline py-1" href="Servicios">Instagram</a>
                    <a className="block text-d17-white hover:underline py-1" href="Servicios">Youtube</a>
                    <a className="block text-d17-white hover:underline py-1" href="Servicios">Blog</a>
                </nav>

                <div className="py-2.5 sm:py-8 sm:pl-5 sm:col-span-3 md:col-span-1">
                    <img src={logo} alt="" className="w-28 mx-auto md:mx-0"/>
                    <p className="text-d17-white py-2.5 text-xs text-center md:text-left">{new Date().getFullYear()} ©  | Todos los derechos Reservados</p>
                </div>




            </div>


            <div className="grid grid-cols-4">
                <div className="bg-d17-mkt h-5"> </div>
                <div className="bg-d17-dg h-5"> </div>
                <div className="bg-d17-cnt h-5"> </div>
                <div className="bg-d17-web-50 h-5"> </div>
            </div>
        </footer>


    </>
}

export default Footer;
