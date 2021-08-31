import React from 'react';
import { TextAlert } from './styled';

const Alert = ({children, show}) => {

    return ( 
        <TextAlert display={show ? "flex" : "none"}>{children}</TextAlert>
     );
}
 
export default Alert;