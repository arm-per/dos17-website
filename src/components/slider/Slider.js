import banner01 from './images/banner0.png';
import banner02 from './images/banner1.png';
import banner03 from './images/banner2.png';
import banner04 from './images/banner3.png';

import {useEffect} from 'react';

const Slider = () => {

    useEffect(()=> {
        const slideContainer = document.getElementById('slide-container');
        const controles = document.querySelectorAll('input[name="main-slider"]');
        let move = 0;

        controles.forEach(control => control.addEventListener('click', ev => {
            slideContainer.style.marginLeft = `${control.value * -100}%`;
            ev.stopPropagation();
            move = control.value -1;
        }))

        window.setInterval(()=>{
            move++;
            slideContainer.style.marginLeft = `${move * -100}%`
            if(move >=3){
                move = -1;
            }
        },5000)



    })

    return <section className=" mx-auto container overflow-hidden relative">
        <div id="slide-container" className="flex w-full">
            <img className="block min-w-full w-full object-cover" src={banner01} alt=""/>
            <img className="block min-w-full w-full object-cover" src={banner02} alt=""/>
            <img className="block min-w-full w-full object-cover" src={banner03} alt=""/>
            <img className="block min-w-full w-full object-cover" src={banner04} alt=""/>
            <div className="absolute z-10 bottom-1 slider-navigator">
                <input type="radio" className="bg-d17-mkt opacity-50 slider-radio" name="main-slider" value="0" aria-checked={"true"}/>
                <input type="radio" className="bg-d17-dg opacity-50 slider-radio" name="main-slider" value="1"/>
                <input type="radio" className="bg-d17-cnt opacity-50 slider-radio" name="main-slider" value="2"/>
                <input type="radio" className="bg-d17-web-50 opacity-50 slider-radio" name="main-slider" value="3"/>
            </div>
        </div>
    </section>
}

export default Slider;
