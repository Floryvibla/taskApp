import styled from 'styled-components'

import './css/input.css'

const View= styled.div`
    max-width: 100%;
    min-height: 10%;
    padding: 0.4rem;
    border-radius: 10px;
    background-color: ${props=> props.done ? "rgba(150, 248, 227, 0.233)" : "rgba(61, 60, 60, 0.233)"};
    backdrop-filter: blur(20px);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.027);
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    

    @media(min-width: 768px) {
        height: 7vh;
        cursor: pointer;
}

`
const Task= styled.div`
    text-decoration: ${props => props.done ? "line-through" : "none"};
    
    @media(min-width: 768px){
        font-size: 2vw;
    }
`

export default function ViewTask(props){

    var doneprops= props.done


    return(
        <View 
            onClick={() => props.onClickChangeBgrd()}
            done={doneprops}
        >
            <div className="done">
                {props.doneBtn}
            </div>
            <Task done={doneprops} className="task">
                {props.taskText}
            </Task>
            <div className="delete">
                {props.deleteBtn}
            </div>
        </View>
    )
}