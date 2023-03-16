import Topo from "../../components/Topo"
import Menu from "../../components/Menu"
import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../context/authUser"
import DivHabitos from "../../components/DivHabitos"

export default function HabitosPage() {
    const [divAdicionar, setDivAdicionar] = useState(0)
    const [nomeHabito, setNomeHabito] = useState("")
    const {user} = useContext(UserContext)
    const token = user.token

        return (
            <ContentHabitosPage>
                <Topo />
                <ContentHabitos>
                    <DivTitle>
                        <h2>Meus hábitos</h2>
                        <button onClick={() => setDivAdicionar(1)} >+</button>
                    </DivTitle>
                    <DivHabitos user={user} token={token} nomeHabito={nomeHabito} setNomeHabito={setNomeHabito} setDivAdicionar={setDivAdicionar} divAdicionar={divAdicionar}/>
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

