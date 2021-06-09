import banner from './banner.png'
import styled from 'styled-components';

const DivStyled = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("${banner}");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 50px;
  position: relative;
`;
const DivStyledShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,.7) 0%, white 40%);
    mix-blend-mode: multiply;
  top: 0;
`



export default function Banner () {

    return <>
        <div className="container mx-auto">
        <DivStyled>
            <h1 className="text-5xl text-d17-white font-bold relative z-10">Portafolio</h1>
            <DivStyledShadow/>
        </DivStyled>
        </div>
    </>
}
