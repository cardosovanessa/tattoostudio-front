import styled from "styled-components";

export const BuscaDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 60vw;
    form{
        background-color: transparent;
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px;
        input {
            width: 30vw;
            font-size: 18px;
            line-height:1.5;
            margin: 10px
        }
        label {
            color: #fff;
            font-size: 25px;
            margin: 10px
        }
    }
    .cards{
        display: flex;
        flex-wrap: wrap;
    }
`