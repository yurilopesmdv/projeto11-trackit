import { useContext } from "react"
import styled from "styled-components"
import { UserContext } from "../context/authUser"

export default function Topo() {
    const { user } = useContext(UserContext)
    const urlFoto = user.image
    console.log(urlFoto)
    return (
        <Header data-test="header">
            <h1>TrackIt</h1>
            <img src={urlFoto} alt='foto-de-perfil' ></img>
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
        color: #FFFFFF;
        font-family: 'Playball', cursive;

    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98px;
    }
`