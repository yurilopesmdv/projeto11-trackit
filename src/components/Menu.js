import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Menu() {
    return (
        <Footer >
            <Link to={"/habitos"} > Hábitos </Link>
            <Link to={"/hoje"} >
                <div>Hoje</div>
            </Link>
            <Link to={"/historico"} >Histórico</Link>
        </Footer>
    )
}
const Footer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF;
    padding: 30px;
    a {
        font-family: 'Lexend Deca', sans-serif;
        color: #52b6ff;
        font-size: 18px;
        text-decoration: none;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 91px;
        height: 91px;
        background: #52B6FF;
        border-radius: 100px;
        margin-bottom: 60px;
        color: #FFFFFF;
        font-size: 18px;
        font-weight: 400;
        font-family: 'Lexend Deca', sans-serif;
    }
`