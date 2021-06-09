import {useEffect, useState} from "react";
import parse from 'html-react-parser';

export function Post (){
    const [post, setPost] = useState([]);

    useEffect(()=>{
        const identificator = window.location.pathname;
        const regex = /(\d+)/g;
        const id = identificator.match(regex);
        fetch(`https://control.dos17.digital/wp-json/wp/v2/posts/${id}`)
            .then(response => response.json())
            .then(response => {
                return setPost([response])
            })
    },[])


    return  <>
        <article className="container mx-auto">
            {
                post.map((art, index)=>{
                    return <div key={index} className="blog-post">
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
