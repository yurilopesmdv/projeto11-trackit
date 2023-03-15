import styled from "styled-components"
import Menu from "../../components/Menu"
import Topo from "../../components/Topo"

export default function HistoricoPage() {
    return (
        <ContentHistoricoPage>
            <Topo />
            <ContentHistorico>
                <DivTitle>
                    <h2>Histórico</h2>
                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </DivTitle>
            </ContentHistorico>
            <Menu />
        </ContentHistoricoPage>
    )
}
const ContentHistoricoPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`
const ContentHistorico = styled.div`
    width: 100%;
    height: 100%;
    margin: 70px 0;
    background-color: #F2F2F2;
`
const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 15px;
    p {
        margin-top: 20px;
        font-size: 18px;
        color: #666666;
    }
`