import { useState } from "react"
import styled from "styled-components"

export default function DivAdd({ nomeHabito, setNomeHabito, setDivAdicionar }) {
    const [diasSelecionados, setDiasSelecionados] = useState([])
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"]

    function salvarHabito() {
        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = {
            name: nomeHabito,
            days: diasSelecionados
        }
        
    }
    return (
        <Content>
            <input onChange={(e) => setNomeHabito(e.target.value)}
                value={nomeHabito}
                placeholder={"nome do hábito"}
            />
            <DivDias >
                {diasDaSemana.map((dia, index) => {
                    return (
                        <BotaoDia diasSelecionados={diasSelecionados}
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
                <p onClick={() => {
                    setDiasSelecionados([])
                    setDivAdicionar(0)
                }}>
                    Cancelar
                </p>
                <button onClick={salvarHabito}>Salvar</button>
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
    p{
        margin-bottom: 8px;
        color: #52B6FF;
        font-size: 16px
    }
    button {
        width: 84px;
        height: 35px;

    }

`