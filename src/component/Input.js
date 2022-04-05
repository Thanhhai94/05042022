import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItems } from "../redux/ActionCreateor"
import { getList } from "../redux/selector"
import {v4 as uuidv4} from 'uuid'


const Input = () => {
    const dispatch = useDispatch()
    const [item, setItem] = useState()
    const inputRef = useRef()
    const onClick = () => {
        console.log(item)
        dispatch(addItems({
            id: uuidv4(),
            item: item
        }))
        inputRef.current.focus()
        inputRef.current.value = ""
       
    }
    const onChange = (e) => {
        setItem(e.target.value)
        
    }
    return(
        <div>
            <input type='text' ref={inputRef} onChange={(e) => onChange(e)}></input>
            <input type='button' value='ADD' onClick={onClick}></input>
        </div>
    )
}

export default Input