import img01 from './logos/Artboard1.png'
import img02 from './logos/Artboard2.png'
import img03 from './logos/Artboard3.png'
import img04 from './logos/Artboard4.png'
import img05 from './logos/Artboard5.png'
import img06 from './logos/Artboard6.png'
import img07 from './logos/Artboard7.png'
import img08 from './logos/Artboard8.png'
import img09 from './logos/Artboard9.png'
import img10 from './logos/Artboard10.png'
import img11 from './logos/Artboard11.png'
import img12 from './logos/Artboard12.png'
import img13 from './logos/Artboard13.png'
import img14 from './logos/Artboard14.png'
import img15 from './logos/Artboard15.png'
import img16 from './logos/Artboard16.png'
import img17 from './logos/Artboard17.png'
import img18 from './logos/Artboard18.png'
import img19 from './logos/Artboard19.png'
import img20 from './logos/Artboard20.png'

const Customers = (props) => {

    const logos = [
        img01,
        img02,
        img03,
        img04,
        img05,
        img06,
        img07,
        img08,
        img09,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20
    ]


    return <section>
        <div className="container mx-auto p-4 sm:p-0 overflow-hidden">
            <h2 className="section-title">Clientes</h2>

            <div className="flex my-8 flex-wrap justify-center">
                {
                    logos.map((img, index) => {
                        return <img src={img} alt='logo' className="w-24 h-24 m-4" key={index}/>
                    })
                }
            </div>
            <a href={props.url} className="route-section-link mx-auto hover:bg-d17-dark-light">Conocer Portafolio</a>
        </div>


    </section>
}

export default Customers;
