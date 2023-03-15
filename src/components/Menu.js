import { Link } from "react-router-dom"
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import { ProgressContext } from "../context/DayProgress"
import { useContext } from "react"

export default function Menu() {
    const {progress} = useContext(ProgressContext)
    return (
        <Footer >
            <Link to={"/habitos"} > Hábitos </Link>
            <Link to={"/hoje"} >
                <div>
                    <CircularProgressbar
                        value={progress}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#3e98c7",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </div>
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
        width: 91px;
        height: 91px;
        margin-bottom: 60px;
        .CircularProgressbar-text {
            text-anchor: middle;
            alignment-baseline: middle; 
        }
    }
`