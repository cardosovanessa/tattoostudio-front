import React from 'react';

const Forms = (props) => {
    const {disable} = props
    return (
        <form>
            <input type="text" disabled={disable}/>
        </form>
    );
}
 
export default Forms;