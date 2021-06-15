import styled from 'styled-components'

import './css/input.css'

const BtnDelete= styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50px 50px;
    width: 8%;
    height: 30px;
    background-color: rgb(3, 0, 10, 0);
    color: rgb(189, 66, 107);
    font-size: 3vw;

    &:hover{
        color: rgb(240, 101, 147);
    }

    @media(min-width: 768px) {
        cursor: pointer;
    }

`

export default function Done(props){
    return(
        <BtnDelete
            onClick={(e) => props.onClickBtn(e)}
        >
            ✘
        </BtnDelete>
    )
}