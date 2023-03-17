import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import DivAdd from "./DivAdd"
import HabitosSalvos from "./HabitosSalvos"

export default function DivHabitos({ token, nomeHabito, setNomeHabito, setDivAdicionar, divAdicionar, user }) {
    const urlGet = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const [habitosApi, setHabitosApi] = useState([])
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    useEffect(() => {
        pegarHabitosApi()
    }, [])
    function pegarHabitosApi() {
        const promise = axios.get(urlGet, config)
        promise.then(res => {
            setHabitosApi(res.data)
        })
        promise.catch(err => console.log(err.response.data))
    }
    if (divAdicionar === 0 && habitosApi.length === 0) {
        return (
            <ContentHabitos>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContentHabitos>
        )
    }
    if (divAdicionar === 0 && habitosApi.length > 0) {
        return (
            <ContentHabitos>
                {habitosApi.map((hab) => {
                    return (
                        <HabitosSalvos config={config} pegarHabitosApi={pegarHabitosApi} key={hab.id} hab={hab} />
                    )
                })}
            </ContentHabitos>
        )
    }
    if (divAdicionar > 0 && habitosApi.length === 0) {
        return (
            <ContentHabitos>
                <DivAdd token={token}
                    nomeHabito={nomeHabito}
                    setNomeHabito={setNomeHabito}
                    setDivAdicionar={setDivAdicionar}
                    pegarHabitosApi={pegarHabitosApi}
                />
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContentHabitos>
        )
    }
    if (divAdicionar > 0 && habitosApi.length > 0) {
        return (
            <ContentHabitos>
                <DivAdd token={token}
                    nomeHabito={nomeHabito}
                    setNomeHabito={setNomeHabito}
                    setDivAdicionar={setDivAdicionar}
                    pegarHabitosApi={pegarHabitosApi}
                />
                {habitosApi.map((hab) => {
                    return (
                        <HabitosSalvos config={config} pegarHabitosApi={pegarHabitosApi} key={hab.id} hab={hab} />
                    )
                })}
            </ContentHabitos>
        )
    }


}


const ContentHabitos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;
    p {
        margin-top: 13px;
        color: #666666;
        font-size: 18px;
    }
`