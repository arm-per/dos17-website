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
                    <p>Nos especializamosen crear estrategias que logren recuperar
                        información, atraer nuevos clientes, generar ventas y establecer
                        una correcta atención al cliente al identificar sus necesidades.</p>
                </ServiceCard>

                <ServiceCard image={dgp} link="/design">
                    <h3>Diseño<br/>Gráfico</h3>
                    <p>Nuestro equipo de profesionales domina todas las estrategias para conceptualizar
                        y abstraer ideaspara representarlas por medio de símbolos,formas, colores y
                        composiciones que transmitan un mensajeclaro y trascendente.</p>
                </ServiceCard>

                <ServiceCard image={cnt} link="/contenido">
                    <h3>Contenido<br/>Audiovisual</h3>
                    <p>Lasempresasrequieren contenido gráfico y audiovisual para
                        comunicarseal interior y al exterior de susmuros,espor ello que
                        contamos con el equipo técnico y humano paracubrir esas
                        necesidades.</p>
                </ServiceCard>

                <ServiceCard image={web} link="/web">
                    <h3>Desarrollo<br/>Web</h3>
                    <p>Desarrollamos software con especificaciones únicasde acuerdo a
                        lasnecesidadesdel cliente, ademásde la creación de sitios,
                        aplicaciones web 100%personalizables o bien,la programación de
                        aplicacionesmóviles que cumplan con las expectativas del cliente.</p>
                </ServiceCard>
            </div>
        </div>

    </section>
}

export default Services;
