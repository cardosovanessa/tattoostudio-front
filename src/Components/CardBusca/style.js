import styled from 'styled-components'

export const CardPortifolio = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;
    color: #fff;
    padding: 20px;
    margin: 10px;
    height: 200px;
    width: min(70vw, 450px);
    img {
        size: contain;
        height: 200px;
        margin: 0 20px;
        border-radius: 10px
    }
`