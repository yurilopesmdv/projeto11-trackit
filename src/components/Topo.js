import styled from "styled-components"

export default function Topo() {
    const urlFoto = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
    return (
        <Header>
            <h1>TrackIt</h1>
            <img src={urlFoto} alt='foto-de-perfil' />
        </Header>
    )
}
const Header = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    h1 {
        font-size: 39px;
        color: #FFFFFF
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
`