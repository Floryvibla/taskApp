import styled from 'styled-components'

import './css/input.css'

const BtnDeleteAll= styled.button`
    border: none;
    border-radius: 10px;
    width: 40%;
    height: 40px;
    background-color: rgb(35, 17, 75);
    color: rgb(223, 219, 221, 0.5);
    font-size: 4vw;

    &:hover{
        color: rgb(223, 219, 221, 0.9);
    }
    &:active{
        background-color: rgb(95, 65, 158);
    }

    @media(min-width: 768px) {
    font-size: 1.5vw;
    width: 25%;
    cursor: pointer;
}

`

export default function Done(props){
    return(
        <BtnDeleteAll
            onClick={() => props.onClickBtn()}
        >
         {props.text}   ✖
        </BtnDeleteAll>
    )
}