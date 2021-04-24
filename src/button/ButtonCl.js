import React from 'react';
import ButtonF from '../ButtonF/ButtonF';
export default class ButtonCl extends React.Component{
    render (){
        return(
            <ButtonF suma={this.props.suma2} text={this.props.text}
            color={this.props.color} padding={this.props.padding}/>
        )
    }
}