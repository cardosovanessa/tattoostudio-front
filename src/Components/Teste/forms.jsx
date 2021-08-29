import React from 'react';

const Forms = (props) => {
    const {disable} = props

    const onClick = (event)=>{
        event.preventDefault()
    }

    return (
        <form onSubmit={onClick}>
            <input type="text" name="Nome" disabled={disable}/>
            <input type="text" name="telefone" disabled={disable}/>
            <input type="text" name="email" disabled={disable}/>
            <select name="tatuador" onChange={(e)=>{console.log(e.target.value)}} defaultValue="tatuadores">
                <option value="tatuadores" disabled>Tatuadores</option>
                <option>Zé</option>
                <option>Joao Fulgencio</option>
                <option>Kin Yoka</option>
            </select>

            <button type="submit">enviar</button>
        </form>
    );
}
 
export default Forms;