import {useEffect} from 'react';

const Phrase = () => {

    useEffect(()=> {
        const paragraph = document.getElementById("phrase");
        const activateAnimation = () => {
            if(paragraph.getBoundingClientRect().top <= 400){
                paragraph.classList.add("animation-corporate");
            }
        }

        window.addEventListener('scroll', activateAnimation)

    })

    return <main className="container mx-auto my-10 relative">
        <p id="phrase" className="phrases text-5xl sm:text-7xl text-center font-serif italic "><span>"Creamos y</span><span>soñamos en</span> <span>grande"</span></p>
    </main>
}

export default Phrase;
