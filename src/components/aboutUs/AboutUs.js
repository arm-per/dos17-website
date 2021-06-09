import styled from "styled-components";
import wheel from './wheel.svg';
import {useEffect} from "react";

const StyledDiv = styled.div`
  width: 350px;
  height: 350px;
  background-image: url("${wheel}");
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin: 0 auto;
`

export default function AboutUs(){

    useEffect(function (){
      const move = document.getElementById('movement');

      setTimeout(()=> {
          move.style.right = '100%';
          move.style.transition = 'All .5s';
      },500)
    },)

    return <section className="bg-d17-light " id="nosotros">
        <div className="container mx-auto md:grid grid-cols-2 gap-8 items-center py-8 overflow-hidden">
            <StyledDiv>
                <h2 className="font-black text-5xl text-center self-center">¿QUIÉNES <br/>SOMOS?</h2>
            </StyledDiv>
            <div className="overflow-hidden">
                <div className="flex relative" id="movement">
                <div className="p-4 flex-shrink-0 w-full">
                    <p className="font-bold text-xl max-w-lg">
                        Somos una <span className="font-normal">agencia creativa multimedia,</span>
                        resolvemos todas las necesidades
                        para impulsar empresas con
                        estrategias digitales.
                    </p>
                </div>
                <div className="p-4 flex-shrink-0 w-full">
                    <p className="font-bold text-xl max-w-lg">
                        Somos una <span className="font-normal">agencia creativa multimedia,</span>
                        resolvemos todas las necesidades
                        para impulsar empresas con
                        estrategias digitales.
                    </p>
                </div>
                <div className="p-4 flex-shrink-0 w-full">
                    <p className="font-bold text-xl max-w-lg">
                        Somos una <span className="font-normal">agencia creativa multimedia,</span>
                        resolvemos todas las necesidades
                        para impulsar empresas con
                        estrategias digitales.
                    </p>
                </div>
                <div className="p-4 flex-shrink-0 w-full">
                    <p className="font-bold text-xl max-w-lg">
                        Somos una <span className="font-normal">agencia creativa multimedia,</span>
                        resolvemos todas las necesidades
                        para impulsar empresas con
                        estrategias digitales.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
}
