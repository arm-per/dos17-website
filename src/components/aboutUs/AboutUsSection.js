const AboutUsSection = (props) => {


    return <section className="sm:grid grid-cols-2 items-center">
        <div>
            <h1 className="font-bold text-3xl text-center">¿Quiénes somos?</h1>
        </div>
        <div className="w-full flex overflow-hidden">
            <div className="p-4 w-full flex-shrink-0">
                <img src={props.image} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Alias eaque itaque voluptates.</em> Dolorum exercitationem neque quas quasi quibusdam quis saepe suscipit veniam! Corporis distinctio eaque laboriosam molestias obcaecati repudiandae tempore!</p>
            </div>
            <div className="p-4 w-full flex-shrink-0">
                <img src={props.image} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Alias eaque itaque voluptates.</em> Dolorum exercitationem neque quas quasi quibusdam quis saepe suscipit veniam! Corporis distinctio eaque laboriosam molestias obcaecati repudiandae tempore!</p>
            </div>
            <div className="p-4 w-full flex-shrink-0">
                <img src={props.image} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Alias eaque itaque voluptates.</em> Dolorum exercitationem neque quas quasi quibusdam quis saepe suscipit veniam! Corporis distinctio eaque laboriosam molestias obcaecati repudiandae tempore!</p>
            </div>
            <div className="p-4 w-full flex-shrink-0">
                <img src={props.image} alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <em>Alias eaque itaque voluptates.</em> Dolorum exercitationem neque quas quasi quibusdam quis saepe suscipit veniam! Corporis distinctio eaque laboriosam molestias obcaecati repudiandae tempore!</p>
            </div>
        </div>
    </section>
}

export default AboutUsSection;
