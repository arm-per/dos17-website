import Banner from './Banner/Banner'
import {useEffect, useState} from "react";

const Portfolio = () => {

    const [portafolio, setPortafolio] = useState([]);

    useEffect(()=>{
        obtenerData()
    },[])

    const obtenerData = async () => {
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/23') => portafolio;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/24') => blog;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/3') => content;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/2') => design;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/1') => marketing;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/2') => design;
        //const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/4') => web;
        const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts?categories/23');
        const portfolio = await data.json();
        setPortafolio(portfolio)
        console.log(portfolio)
    }

    return <>
        <Banner/>

        <div className="bg-d17-light py-4">
            <h2 className="section-title">Conoce nuestro portafolio</h2>
            <div className="container mx-auto grid grid-cols-3 gap-4">
                {
                    portafolio.map((entry, index) => {
                        return <div className="bg-d17-white rounded-2xl overflow-hidden mb-10 md:mb-0" key={index}>

                            <img src={entry.featured_media_src_url} alt={entry.slug + ' img'} className="h-64 object-cover w-full"/>
                            <div className="p-4 flex flex-col h-auto ">
                                <h3 className="font-bold text-2xl whitespace-nowrap overflow-ellipsis overflow-hidden">{entry.title.rendered}</h3>
                                <span className="text-d17-mkt text-lg">{new Date(entry.date).toLocaleDateString( 'es-MX',{year: 'numeric', month: 'long', day: 'numeric' })} </span> <br/>
                                <a href={"/post/"+ entry.id +"/"+ entry.slug } className="p-1.5 text-center block w-32 rounded-xl border-2 border-d17-dark self-end hover:bg-d17-dark hover:text-d17-white" target="_self">Ver más</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

export default Portfolio;
