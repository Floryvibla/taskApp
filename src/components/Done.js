import styled from 'styled-components'

import './css/input.css'

const BtnDone= styled.button`
    width: 20px;
    height: 20px;
    border-radius: 8px;
    border: ${props=> props.done ? "none" : "2px solid rgba(177, 84, 168, 0.822)"};
    background-color: ${props => props.done ? "rgba(177, 84, 168, 0.822)" : "rgb(3, 0, 10, 0)"};
    color: rgb(3, 0, 10);
    font-size: ${props => props.done ? "12px" : "none"};
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        border: ${props=> props.done ? "none" : "2px solid rgba(177, 84, 168)"};
        background-color: ${props => props.done ? "rgb(177, 84, 168)" : "none"};
    }

    @media(min-width: 768px) {
        cursor: pointer;
    }
}

`

export default function Done(props){
    return(
        <BtnDone
            done={props.done}
            onClick={(e) => props.onClickBtn(e)}
        >
        {props.done ? "✔" : ""}
        </BtnDone>
    )
}