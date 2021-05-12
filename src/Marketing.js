import MarketingHead from "./components/Heads/MarketingHead";
import WhatWhy from "./components/WhatWhy/WhatWhy";

const Marketing = () => {

    return <>
        <MarketingHead/>
        <WhatWhy>
            <p className="px-4 py-8"><span className="font-bold">Las empresas requieren</span> contenido
                gráfico y audiovisual para comunicarse
                <span className="font-bold">al interior y al exterior de sus muros,
                es por ello que contamos con el equipo
                técnico y humano para cubrir
                esas necesidades.</span></p>
        </WhatWhy>
    </>
}

export default Marketing;
