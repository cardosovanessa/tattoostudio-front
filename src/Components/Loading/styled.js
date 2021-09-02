import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
`

export const LoadingDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffec4e;
    height: 90vh;
    width: 100vw;
    img{
        width: 20vw;
        animation: ${loading} 5s linear infinite;
    }

`