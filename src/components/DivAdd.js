import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

export default function DivAdd({ nomeHabito, setNomeHabito, setDivAdicionar, token, pegarHabitosApi }) {
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const [loading, setLoading] = useState(false)
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"]

    function salvarHabito() {
        setLoading(true)
        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = {
            name: nomeHabito,
            days: diasSelecionados
        }
        const config = {
            headers: { Authorization: `Bearer ${token}`}
        }
        if(nomeHabito !== "" && diasSelecionados.length !== 0) {
            const promise = axios.post(urlPost, body, config)
            promise.then(res => {
                setLoading(false)
                setDivAdicionar(0)
                pegarHabitosApi()
            })
            promise.catch(err => {
                setLoading(false)
                alert(err.response.data.message)
            })
        } else {
            alert("Preencha os dados corretamente")
            setLoading(false)
        }
        
    }
    return (
        <Content data-test="habit-create-container">
            <input data-test="habit-name-input" disabled={loading} onChange={(e) => setNomeHabito(e.target.value)}
                value={nomeHabito}
                placeholder={"nome do hábito"}
            />
            <DivDias >
                {diasDaSemana.map((dia, index) => {
                    return (
                        <BotaoDia  data-test="habit-day"
                            diasSelecionados={diasSelecionados}
                            disabled={loading}
                            index={index}
                            key={index}
                            onClick={() => {
                                if(diasSelecionados.includes(index)) {
                                    setDiasSelecionados(diasSelecionados.filter((dia) => dia !== index ))
                                    return
                                }
                                setDiasSelecionados([...diasSelecionados, index])
                            }
                            }>
                            {dia}
                        </BotaoDia>
                    )
                })}
            </DivDias>
            <DivSalvar>
                <button  data-test="habit-create-cancel-btn"
                    onClick={() => {
                    setDivAdicionar(0)
                }}>
                    Cancelar
                </button>
                <button data-test="habit-create-save-btn" onClick={salvarHabito}>Salvar</button>
            </DivSalvar>
        </Content>
    )
}

const Content = styled.div`
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 10px;
`
const DivDias = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 8px;
`
const BotaoDia = styled.button`
    width: 30px;
    height: 30px;
    background: ${(props) => props.diasSelecionados.includes(props.index) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(props) => props.diasSelecionados.includes(props.index) ? "#FFFFFF" : "#DBDBDB"};
    font-size: 20px;
`
const DivSalvar = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
    margin-top: 20px;
    button:first-child{
        margin-bottom: 8px;
        color: #52B6FF;
        font-size: 16px;
        border: none;
        background: transparent;
    }
    button:last-child {
        width: 84px;
        height: 35px;
        font-size: 16px;
        margin-bottom: 8px;
    }

`