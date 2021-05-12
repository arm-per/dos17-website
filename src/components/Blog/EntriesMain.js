import {useEffect, useState} from "react";

const EntriesMain = () => {

    const [entries, setEntries] = useState([]);

    useEffect(()=>{
        obtenerDatos()
    }, [])

    const obtenerDatos = async ()=> {
        const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts');
        const posts = await data.json();
        console.log(posts)
        setEntries(posts)
    }

    console.log(entries[0])

    return <section className='bg-d17-light-gray p-10 mt-10'>
        <div className="mx-auto container md:grid grid-cols-3 gap-4">
        {
            entries.map(entry => {
                return <div className="bg-d17-white rounded-2xl overflow-hidden mb-10 md:mb-0">
                    <img src={entry.featured_media_src_url} alt={entry.slug + ' img'} className="h-64 object-cover w-full"/>
                    <div className="p-4 flex flex-col">
                        <h3 className="font-bold text-2xl">{entry.title.rendered}</h3>
                        <span className="text-d17-mkt text-lg">{entry.date} </span> <br/>
                        <a href={entry.link} className="p-1.5 text-center block w-32 rounded-xl border-2 border-d17-dark self-end hover:bg-d17-dark hover:text-d17-white">Ver más</a>
                    </div>
                </div>
            })
        }
        </div>
    </section>

}

export default EntriesMain;
