import styled from "styled-components"
import Menu from "../../components/Menu"
import Topo from "../../components/Topo"

export default function HojePage() {
    return (
        <ContentHojePage>
            <Topo />
            <ContentHoje>
                <DivTitle>
                    <h2>Segunda, 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </DivTitle>
                <DivHabitos>
                    <Item>
                        <div>
                            <h3>Ler muito</h3>
                            <h4>Sequência atual: 3 dias</h4>
                            <h4>Seu recorde: 5 dias</h4>
                        </div>
                        <DivCheck>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </DivCheck>
                    </Item>

                    <Item>
                        <div>
                            <h3>Ler muito</h3>
                            <h4>Sequência atual: 3 dias</h4>
                            <h4>Seu recorde: 5 dias</h4>
                        </div>
                        <DivCheck>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </DivCheck>
                    </Item>

                    <Item>
                        <div>
                            <h3>Ler muito</h3>
                            <h4>Sequência atual: 3 dias</h4>
                            <h4>Seu recorde: 5 dias</h4>
                        </div>
                        <DivCheck>
                            <ion-icon name="checkmark-outline"></ion-icon>
                        </DivCheck>
                    </Item>
                </DivHabitos>
            </ContentHoje>
            <Menu />
        </ContentHojePage>
    )
}
const ContentHojePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
const ContentHoje = styled.div`
    width: 100%;
    height: 100%;
    margin: 70px 0;
    background-color: #F2F2F2;
`
const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 10px;
    p {
        color: #BABABA;
        font-size: 18px;
        margin-top: 8px;
    }
`
const DivHabitos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px 30px 10px;
    gap: 10px;
`
const Item = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    h3 {
        margin-bottom: 10px;
    }
    h4 {
        color: #666666;
        font-size: 13px;
    }
`
const DivCheck = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    ion-icon {
        color: #FFFFFF;
        font-size: 50px;
    }
`