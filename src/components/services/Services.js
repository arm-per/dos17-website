import ServiceCard from "./ServiceCard";
import mkt from './mkt-icon.svg';
import dgp from './dgp-icon.svg';
import cnt from './cnt-icon.svg';
import web from './web-icon.svg';

const Services = () => {

    return <section>
        <div className="container mx-auto" id="servicios">
            <h2 className="section-title">Servicios</h2>
            <div className="grid px-2.5 sm:grid-cols-2 sm:px-0 lg:grid-cols-4 gap-2.5">

                <ServiceCard image={mkt} link="/marketing">
                    <h3>Marketing<br/>Digital</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </ServiceCard>

                <ServiceCard image={dgp} link="/design">
                    <h3>Diseño<br/>Gráfico</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </ServiceCard>

                <ServiceCard image={cnt} link="/contenido">
                    <h3>Contenido<br/>Audiovisual</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </ServiceCard>

                <ServiceCard image={web} link="/web">
                    <h3>Desarrollo<br/>Web</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </ServiceCard>
            </div>
        </div>

    </section>
}

export default Services;
