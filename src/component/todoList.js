import { useDispatch, useSelector } from "react-redux"
import { removeItems } from "../redux/ActionCreateor"
import { getList } from "../redux/selector"



const TodoList = () => {
    const dispatch = useDispatch()
    const onClick = (id) => {
        console.log(id)
        dispatch(removeItems(id))
        
    }
    const List = useSelector(getList)
    console.log(List)
    return(
        <div>
           {List.map(item =>{
               return(
                   <li key={item.id} onClick={()=>onClick(item.id)}>{item.item}</li>
               )
           })}
        </div>
    )
    
}
export default TodoList