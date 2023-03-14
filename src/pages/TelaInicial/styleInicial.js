import styled from "styled-components"

export const ContentInicial = styled.div`
    width: 100%;
    max-width: 375px;
    background-color: #fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        font-size: 13px;
        text-decoration-line: underline;
        
    }
`
export const FormInicial = styled.form`
    display: flex;
    flex-direction: column;
    margin: 27px 0;
    input {
        width: 303px;
        height: 45px;
        margin: 5px 0;
        padding: 10px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-size: 19.976px;
        
    }
    input:disabled{
        background: #F2F2F2;
    }
    button {
        margin: 5px 0;
        font-size: 20px;
    }
    button:disabled{
        opacity: 0.7;
    }
`