import { Component } from "react";
import style from '../Button/button.module.css'


class Button extends Component{

    render(){
        return(
            <div>
                <button className={style.butao} onClick={this.props.onClick}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}

export default Button