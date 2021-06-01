export const ContactForm = () => {

    return <>
        <section className="mx-auto container mt-4" id="Contacto">
            <h2 className="section-title">Contacto</h2>
            <div className="md:grid grid-cols-2 gap-6">
                <form action="" className=" mb-4 md:mb-0 bg-d17-dark rounded-2xl p-4">
                    <p className="text-d17-web-50 text-center font-bold">Déjanos tus datos y nos comunicaremos contigo lo antes posible</p>
                    <input type="text" name="name" placeholder="Nombre" id="name" className="w-full p-2 mt-4 rounded-lg"/>
                    <input type="text" name="phone" placeholder="(618) 000 0000" id="phone" className="w-full p-2 mt-4 rounded-lg"/>
                    <input type="text" name="business" placeholder="Empresa" id="business" className="w-full p-2 mt-4 rounded-lg"/>
                    <p className="text-d17-web-50 text-center mt-4 font-bold">¿Qué servicio te interesa?</p>
                    <div className="flex items-center mt-4">
                        <input type="radio" name="service" value="marketing" className="appearance-none block w-6 h-6 border-2 border-d17-mkt rounded-full mkt-check"/>
                        <span className="text-d17-white ml-3 block">Marketing</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" name="service" value="design" className="appearance-none block w-6 h-6 border-2 border-d17-dg rounded-full dg-check"/>
                        <span className="text-d17-white ml-3 block">Diseño Gráfico</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" name="service" value="content" className="appearance-none block w-6 h-6 border-2 border-d17-cnt rounded-full cnt-check"/>
                        <span className="text-d17-white ml-3 block">Contenido</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <input type="radio" name="service" value="web" className="appearance-none block w-6 h-6 border-2 border-d17-web-50 rounded-full web-check"/>
                        <span className="text-d17-white ml-3 block">Web</span>
                    </div>
                    <input type="text" name="money" placeholder="¿Cuánto es tu presupuesto?" id="business" className="w-full p-2 mt-4 rounded-lg"/>
                    <input type="submit" value="Enviar" className=" block py-2 px-6 rounded-lg mx-auto mt-4 submit-btn font-bold"/>

                </form>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1211.991705054114!2d-104.65976157639264!3d24.03127964682199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc8274bfe5efd%3A0xe2c78a25960b3316!2sPaloma%20501%2C%20Zona%20Centro%2C%2034000%20Durango%2C%20Dgo.!5e0!3m2!1sen!2smx!4v1622482531198!5m2!1sen!2smx"
                            width="600" height="450" style={{"border":"0"}} allowFullScreen="" loading="lazy" className="w-full rounded-xl" title="mapa"> </iframe>
                    <p className="font-bold mt-4">Calle Paloma #501, Zona centro, Durango, Dgo. <br/>
                        Teléfono 618 195 6291 <br/>
                        WhatsApp 618 000 0000</p>
                </div>
            </div>
        </section>
    </>
}
