const ServiceCard = (props) => {

    return  <div className="bg-d17-dark rounded-3xl p-4 flex flex-col">
        <img src={props.image} alt="" className="w-28 block mx-auto my-4"/>
        <h3 className="services-card-title">{props.children[0].props.children}</h3>

        <p className="text-d17-white my-8">{props.children[1].props.children}</p>
        <a href={props.link} className="card-link hover:bg-d17-white hover:text-d17-dark">Ver más &gt;</a>
    </div>
}

export default ServiceCard;
