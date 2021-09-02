import React from "react";
import machine from "../../assets/img/machine.svg"
import { LoadingDiv } from "./styled";

const Loading = () => {
    return(
        <LoadingDiv>
            <img src={machine} alt=""/>
            <h4>Carregando....</h4>
        </LoadingDiv>
    );
}
 
export default Loading;