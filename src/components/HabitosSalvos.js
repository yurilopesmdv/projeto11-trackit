import axios from "axios"
import styled from "styled-components"

export default function HabitosSalvos({ hab, pegarHabitosApi, config }) {
    const diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"]
    const apiDays = hab.days

    function deletarHab(idHabito) {
        const urlDelete = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHabito}`
        if(window.confirm("Você quer realmente deletar esse hábito?")) {
            const promise = axios.delete(urlDelete, config)
            promise.then(res => {
                pegarHabitosApi()
            })
            promise.catch(err => alert(err.response.data.message))
        }
    }
    return (
        <Content data-test="habit-container">
            <DivTitle>
                <h4 data-test="habit-name">{hab.name}</h4>
                <ion-icon data-test="habit-delete-btn" onClick={() => deletarHab(hab.id)} name="trash-outline"></ion-icon>
            </DivTitle>

            <DivDias>
                {diasDaSemana.map((dia, index) => {
                    return (
                        <BotaoDia  data-test="habit-day"
                            disabled={true}
                            key={index}
                            apiDays={apiDays}
                            index={index}
                        >
                            {dia}
                        </BotaoDia>
                    )
                })}
            </DivDias>
        </Content>
    )
}
const Content = styled.div`
    width: 90%;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 11px;
    margin-bottom: 10px;
    h4 {
        color: #666666;
        font-size: 20px;
        font-family: 'Lexend Deca', sans-serif;
        margin-top: 2px;
        margin-left: 4px;
    }
    ion-icon {
        width: 13px;
        height: 15px;
    }
`
const DivTitle = styled.div`
    display: flex;
    justify-content: space-between;
`
const DivDias = styled.div`
    display: flex;
    justify-content: start;
    gap: 4px;
    margin-top: 8px;
    margin-left: 4px;
`
const BotaoDia = styled.button`
    width: 30px;
    height: 30px;
    background: ${(props) => props.apiDays.includes(props.index) ? "#CFCFCF" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    color: ${(props) => props.apiDays.includes(props.index) ? "#FFFFFF" : "#DBDBDB"};
    font-size: 20px;
`