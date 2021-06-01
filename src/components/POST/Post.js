import {useEffect, useState} from "react";
import parse from 'html-react-parser';

export function Post (){
    const [post, setPost] = useState([]);
    const obtenerPost = async ()=> {
        const data = await fetch('https://control.dos17.digital/wp-json/wp/v2/posts/'+identificator.match(regex));
        const posts = await data.json();
        setPost([posts])
    }

    useEffect(()=>{
        obtenerPost();
    },[])

    const identificator = window.location.pathname;
    const regex = /(\d+)/g;






    return  <>
        <article className="container mx-auto">
            {
                post.map((art, index)=>{
                    return<div key={index} className="blog-post">
                        <img src={art.featured_media_src_url} alt="" className="blog-post-img"/>
                        <h1 className="blog-post-title">{art.title.rendered}</h1>
                        <div className="width-post">
                            {
                                parse(art.content.rendered)
                            }
                        </div>
                    </div>
                })
            }
        </article>



    </>
}
