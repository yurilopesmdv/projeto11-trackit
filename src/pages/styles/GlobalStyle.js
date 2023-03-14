import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
    }
    p {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
    }
    button {
        background-color: #52B6FF;
        height: 45px;
        border-radius: 4.63636px;
        border: none;
        color: #FFFFFF;
        font-weight: 400;
    }
    input {
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
`
export default GlobalStyle