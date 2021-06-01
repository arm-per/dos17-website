import {useEffect, useState} from "react";
import pymes from './PYMES.png'

const BlogEntries = () => {



    const [mainentry, setMainentry] = useState([]);
    const [secondEntries, setSecondentries] = useState([]);
    const [entries, setEntries] = useState([]);

    useEffect(()=>{
        obtenerDatos()
        console.log(entries)
    }, [entries, secondEntries, mainentry])

    const obtenerDatos = async ()=> {
        const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts');
        const posts = await data.json();
        console.log(posts)
        setMainentry([posts[0]]);
        setSecondentries([posts[1],posts[2],posts[3]])
        //setEntries([posts[0],posts[1],posts[2]])
        setEntries(posts.slice(4))

    }


    return <section className='bg-d17-light pt-1 md:px-10 md:pb-10'>
        <div className="mx-auto container">
            {
                mainentry.map((main, index) => {
                    return <div key={index} className="w-full">
                        <div style={{"background":'url('+main.featured_media_src_url+')','height':'350px','width':'100%'}} className="flex flex-col justify-end items-start">
                            <h2 className="bg-d17-dark inline-block text-d17-white p-2 text-3xl font-bold m-5 uppercase">{main.title.rendered}</h2>
                            <a href={"/post/"+ main.id +"/"+ main.slug } className="inline-block bg-d17-web-50 py-3 px-6 font-bold rounded-xl m-5 hover:bg-d17-web-20">Leer más</a>
                        </div>
                    </div>
                })
            }
            <div  className="md:grid grid-cols-3 mt-2 gap-2">
            {
                secondEntries.map((main,index) => {
                    return <div key={index} className="h-72 flex flex-col justify-end items-start" style={{"background":'url('+main.featured_media_src_url+')'}}>
                        <h2 className="uppercase bg-d17-dark inline-block text-d17-white p-2 text-3xl font-bold m-5">{main.title.rendered}</h2>
                        <a href={"/post/"+ main.id +"/"+ main.slug } className="inline-block bg-d17-web-50 py-3 px-6 font-bold rounded-xl m-5 hover:bg-d17-web-20">Leer más</a>
                    </div>
                })
            }
            </div>
            <div className="md:grid grid-cols-12 mt-4 gap-4">
                <div className="col-span-9 bg-d17-white">
                    {
                        entries.map((entry,index)=> {
                            return <>
                            <div key={index} className="grid grid-cols-5  gap-3 h-28 md:h-44 mx-3 my-1  p-2 rounded-xl">
                                <img src={entry.featured_media_src_url} alt="" className="col-span-2 h-24 md:h-40 w-full rounded-xl object-cover box-border"/>
                                <div className="col-span-3 self-center">
                                    <h3 className="font-bold text-2xl">{entry.title.rendered}</h3>
                                    <a href={"/post/"+ entry.id +"/"+ entry.slug } className="inline-block text-d17-dg font-bold rounded-xl mt-2 hover:text-d17-cnt">Leer más</a>
                                </div>

                            </div>
                                <hr className="border-d17-light-gray mx-4"/>
                            </>
                        })
                    }

                </div>
                <div className="col-span-3 hidden md:block">
                    <a className="sticky block top-20 w-full" href="https://wa.me/+5216183280563?text=¡Hola!%20Me%20gustaría%20saber%20más%20de%20las%20promociones%20de%20junio" target="_blank" rel="noreferrer">
                    <img src={pymes} alt="" />
                    </a>
                </div>
            </div>
        </div>
    </section>

}

export default BlogEntries;
