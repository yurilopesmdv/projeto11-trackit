import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../context/authUser"

export default function Item({habito, token, pegarHabitosHoje}) {
    const { name, currentSequence, highestSequence, id, done} = habito
    const { user } = useContext(UserContext)
    const body = {}
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const [feitoAgora, setFeitoAgora] = useState(false)
    function check() {
        if(!done) {
            const urlCheckPost = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            
            const promise = axios.post(urlCheckPost, body, config)
            promise.then(res => {
                pegarHabitosHoje()
                setFeitoAgora(true)
            })
            promise.catch(err => console.log(err.response.data))
        }
        if(done) {
           const urlUncheckPost = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck` 
           const promise = axios.post(urlUncheckPost, body, config)
           promise.then(res => {
                setFeitoAgora(false)
                pegarHabitosHoje()
        })
           promise.catch(err => console.log(err.response.data))
        }
    }
    return (
        <ContentItem feitoAgora={feitoAgora} currentSequence={currentSequence} highestSequence={highestSequence}>
            <div>
                <h3>{name}</h3>
                <h5>Sequência atual: <span>{currentSequence} {currentSequence === 1 ? "dia" : "dias"}</span></h5>
                <h4>Seu recorde: <span>{highestSequence} {highestSequence === 1 ? "dia" : "dias"}</span></h4>
            </div>
            <DivCheck done={done}>
                <ion-icon onClick={check} name="checkmark-outline"></ion-icon>
            </DivCheck>
        </ContentItem>
    )
}
const ContentItem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    font-family: 'Lexend Deca', sans-serif;
    h3 {
        margin-bottom: 10px;
    }
    h4 {
        color: #666666;
        font-size: 12px;
        margin-bottom: 4px;
        span {
            color: ${props => {
                if(props.currentSequence === 0) {
                    return "#666666"
                }
                if(props.highestSequence === props.currentSequence) {
                    return "#8FC549" 
                } else {
                    return "#666666"
                }
            } };
        }
    }
    h5 {
        color: #666666;
        font-size: 12px;
        margin-bottom: 4px;
        span {
            color: ${(props) => {
                if(props.currentSequence === 0) {
                    return "#666666"
                }
                if(props.highestSequence === props.currentSequence || props.feitoAgora) {
                    return "#8FC549" 
                } else {
                    return "#666666"
                }
            }};
        }
    }
`
const DivCheck = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background: ${(props) => props.done ? "#8FC549" : "#EBEBEB"};
    border: ${(props) => props.done ? "none" : "1px solid #E7E7E7"};
    border-radius: 5px;
    ion-icon {
        color: #FFFFFF;
        font-size: 50px;
    }
`