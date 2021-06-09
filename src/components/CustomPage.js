import {useEffect, useState} from "react";

export const CustomPage = ({id}) => {

    const [post, setPost] = useState([]);

    useEffect(()=>{
        fetch(`https://control.dos17.digital/wp-json/wp/v2/posts?categories=${id}`)
            .then(res => res.json())
            .then(res => {
                return setPost(res)
            })
            .catch(err => console.log(err))
    },[])

    return <div className="bg-d17-light py-4 container mx-auto">
            <h2 className="section-title">Conoce nuestro portafolio</h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-4">
                {
                    post.map((entry, index) => {
                        return <div className="bg-d17-white rounded-2xl overflow-hidden mb-10 md:mb-0 m-3 mb:m-0" key={index}>
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

}
