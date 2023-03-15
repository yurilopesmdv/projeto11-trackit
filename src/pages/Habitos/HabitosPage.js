import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import styled from "styled-components"
import { useState } from "react"
import DivAdd from "../../components/DivAdd"

export default function HabitosPage() {
    const [divAdicionar, setDivAdicionar] = useState(0)
    const [nomeHabito, setNomeHabito] = useState("")
    if (divAdicionar === 0) {
        return (
            <ContentHabitosPage>
                <Topo />
                <ContentHabitos>
                    <DivTitle>
                        <h2>Meus hábitos</h2>
                        <button onClick={() => setDivAdicionar(1)} >+</button>
                    </DivTitle>
                    <DivHabitos>
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </DivHabitos>
                </ContentHabitos>
                <Menu />
            </ContentHabitosPage>
        )
    }
    return (
        <ContentHabitosPage>
            <Topo />
            <ContentHabitos>
                <DivTitle>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </DivTitle>
                <DivHabitos>
                    <DivAdd nomeHabito={nomeHabito} setNomeHabito={setNomeHabito} setDivAdicionar={setDivAdicionar}/>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </DivHabitos>
            </ContentHabitos>
            <Menu />
        </ContentHabitosPage>
    )

}
const ContentHabitosPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
const ContentHabitos = styled.div`
    width: 100%;
    height: 100%;
    margin: 70px 0;
    background-color: #F2F2F2;
`
const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 15px;
    button {
        width: 40px;
        height: 35px;
        font-size: 26px;
    }
`
const DivHabitos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;
    p {
        margin-top: 13px;
        color: #666666;
        font-size: 18px;
    }
`
