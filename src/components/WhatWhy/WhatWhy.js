import styled from "styled-components";

const WhatWhy = (props) => {

    console.log(props.children)
    const StyledDiv = styled.div`
        background: #efefef;
    `

    return <StyledDiv>
        <div className="container mx-auto md:grid grid-cols-2 content-center py-10 items-center">
            <div>
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border-8 border-solid border-d17-mkt mx-auto flex justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-center">¿QUÉ <br/>HACEMOS?</h1>
                </div>
            </div>
            <div>
                {
                    props.children
                }
                <form className="flex justify-center">
                    <input type="radio" name="service-description" className="why" aria-checked checked/>
                    <input type="radio" name="service-description" className="why"/>
                </form>
            </div>

        </div>
    </StyledDiv>

}

export default WhatWhy
