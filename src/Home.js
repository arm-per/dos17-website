import Slider from "./components/slider/Slider";
import Phrase from "./components/corporativePhrase/Phrase";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Customers from "./components/customers/Customers";
import EntriesMain from "./components/Blog/EntriesMain";



const Home = () => {

    return <>
        <Slider/>
        <Phrase/>
        <AboutUs/>
        <Services/>
        <Customers/>
        <EntriesMain/>
    </>

}

export default Home;
