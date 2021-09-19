import React, {Component} from 'react'
import styled from 'styled-components'
import './button.css'


const StyledButton = styled.button`
color: ${props => props.color == 'default' ? '#3F3F3F' : props.color ? 
'#FFFFFF' : props.variant == 'outline' ? '#3D5AFE' : '#3F3F3F'};
cursor: pointer;
background-color: ${props => props.color == 'danger' ? '#D32F2F' : 
props.color == 'secondary' ?  '#455A64' : 
props.variant  ? 'white' : props.color 
=='primary'? '#2962FF': '#E0E0E0'};
width: ${props => props.size == 'sm' ? '73px' : props.size == 'lg' ? '93px'
 : '81px'};
height: ${props => props.size == 'sm' ? '32px' : props.size == 'lg' ? '42px'
: '36px'};
border-radius: 6px;
text-transform: capitalize;
box-shadow: ${props => props.disableShadow ? null 
    : props.variant == 'text' ? null  : '0px 2px 3px rgba(0, 0, 0, 0.2)'};
border-style: none;
border: ${props => props.variant == 'outline' ? '1px solid #3D5AFE': null};
&:hover{${props => props.variant == 'outline' ? {background: 'rgba(41, 98, 255, 0.1)',
    border: '1px solid #3D5AFE'} : 
    props.variant == 'text' ? {background: 'rgba(41, 98, 255, 0.1)'} : 
    props.color == 'secondary' ? {background: '#1C313A',
        boxShadow: '0px 2px 3px rgba(69, 90, 100, 0.2)'
        } : 
    props.color == 'primary' ? {background: '#0039CB',
        boxShadow: '0px 2px 3px rgba(41, 98, 255, 0.2)'} :
    props.color == 'danger' ? {background: '#9A0007',
        boxShadow: '0px 2px 3px rgba(211, 47, 47, 0.2)'} :
    {background: '#AEAEAE', 
    boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)'}
    }
};
display: block;
font-family: Noto Sans JP;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: center;

`



class Button extends Component{
    constructor(props){
        super(props)
    }
    


    render(){
        return(
            <StyledButton disabled={this.props.disabled ? true : false}
            disableShadow={this.props.disableShadow ? true : false}
            color={this.props.color}
            size={this.props.size}
            variant={this.props.variant}>
                {this.props.startIcon ?
                <span class="material-icons startIcon">
                {this.props.startIcon}
                </span> : null}
                {this.props.color ? this.props.color : 'Default'}
                {this.props.endIcon ?
                    <span class="material-icons endIcon">
                {this.props.endIcon}
                </span> : null}
            </StyledButton>)
    }

}

export default Button;