
import AboutUsSection from "./AboutUsSection";

const AboutUs = () => {


    const moveSlide = (ev) => {
        console.log(ev)
    }

    return <>
        <article className="bg-d17-light-gray py-4" id="nosotros">
            <div className="container mx-auto">
                <AboutUsSection/>

                <div className="flex justify-center">
                    <input type="radio" name="slider-1" value="1" defaultChecked />
                    <input type="radio" name="slider-1" value="2" onChange={moveSlide}/>
                    <input type="radio" name="slider-1" value="3"/>
                    <input type="radio" name="slider-1" value="4"/>
                </div>
            </div>
        </article>
    </>
}

export default AboutUs;
