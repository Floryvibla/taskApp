import React, {useState} from 'react'
import styled from 'styled-components'

import './css/input.css'

const InputText= styled.input`
    width: 90%;
    height: 10px;
    padding: 1rem;
    background-color: rgb(3, 0, 10, 0);
    border-radius: 15px;
    color: whitesmoke;
    font-size: 4vw;
    border: 2px rgba(177, 84, 167, 0.212) solid;

    &:focus{
        outline: none;
        border: 2px rgba(177, 84, 168, 0.384) solid;
    }

    @media(min-width: 768px) {
    font-size: 2vw;
}

`

export default function Input(props){

    const [text, setText] = useState("")

    const add= (e) => {
        let whiteSpace= text.trim()
        if(e.keyCode === 13){
            if (whiteSpace === '') {
                alert("Prencha o campo")
            } else {
                props.onChange(text)
                setText('')
            }
        }
    }


    return(
        <InputText 
            className="input"
            type='text' 
            required='required' 
            placeholder="Adicionar tarefa"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            onKeyUp={(e) => add(e)}
        />
    ) 
}