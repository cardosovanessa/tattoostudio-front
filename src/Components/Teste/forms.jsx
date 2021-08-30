import React from 'react';
import { useForm } from 'react-hook-form';


const Forms = (props) => {
    const {disable, preValues} = props
    const { register, handleSubmit } = useForm({
        defaultValues: preValues
    })

    const onSubmit = (data)=> {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {console.log(preValues)}
            <input type="text" placeholder="NOME" disabled={disable} {...register("NOME")} />
            <input type="text" {...register("IDADE")} disabled={disable}  />
            <input type="text" {...register("RUA")} disabled={disable}  />
            <select name="tatuador" onChange={(e)=>{console.log(e.target.value)}} defaultValue="tatuadores"  >
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