import styled from "styled-components"
import Menu from "../../components/Menu"
import Topo from "../../components/Topo"

export default function HistoricoPage() {
    return (
        <ContentHistoricoPage>
            <Topo />
            <ContentHistorico>

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