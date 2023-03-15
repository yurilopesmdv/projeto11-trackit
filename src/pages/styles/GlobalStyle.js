import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        box-sizing: border-box;
        max-width: 375px;
    }
    p {
        color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
    }
    h2 {
        color: #126BA5;
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
    }
    h3 {
        font-size: 20px;
        color: #666666;
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