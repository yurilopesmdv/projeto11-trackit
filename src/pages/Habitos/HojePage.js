import axios from "axios"
import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Item from "../../components/Item"
import Menu from "../../components/Menu"
import Topo from "../../components/Topo"
import { UserContext } from "../../context/authUser"
import { ProgressContext } from "../../context/DayProgress"

export default function HojePage() {
    const diaNome = [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const mes = [ "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
    const diaHoje = dayjs()
    const [habHoje, setHabHoje] = useState([])
    
    const { user } = useContext(UserContext)
    const { progress, setProgress } = useContext(ProgressContext)
    const token = user.token
    useEffect(() => {
        pegarHabitosHoje()
    }, [])
    function pegarHabitosHoje() {
        const urlGet = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get(urlGet, config)
        promise.then(res => {
            setHabHoje(res.data)
            let habFeitos = 0
            res.data.forEach((element) => {
                if(element.done){
                    habFeitos = habFeitos + 1
                }
            })
            if(habFeitos > 0) {
                const progresso = (habFeitos / res.data.length) * 100
                setProgress(progresso)
            }
            if(habFeitos === 0) {
                const progresso = (habFeitos / res.data.length) * 100
                setProgress(progresso)
            }
        })

        promise.catch(err => console.log(err.response.data))
    }
    return (
        <ContentHojePage>
            <Topo />
            <ContentHoje>
                <DivTitle progress={progress}>
                    <h2 data-test="today">{diaNome[diaHoje.$W]}, {diaHoje.date()}/{mes[diaHoje.month()]}</h2>
                    <p data-test="today-counter">{progress > 0 ? `${progress}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</p>
                </DivTitle>
                <DivHabitos>
                    {habHoje.map((habito) => {
                        return (
                            <Item pegarHabitosHoje={pegarHabitosHoje} token={token} key={habito.id} habito={habito}/>
                        )
                    })}
                </DivHabitos>
            </ContentHoje>
            <Menu />
        </ContentHojePage>
    )
}
const ContentHojePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
const ContentHoje = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    margin: 70px 0;
    background-color: #F2F2F2;
`
const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 10px;
    p {
        color: ${(props) => props.progress > 0 ? "#8FC549" : "#BABABA"};
        font-size: 18px;
        margin-top: 8px;
    }
`
const DivHabitos = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;
    gap: 10px;
`
