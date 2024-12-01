import AddTodoForm from "./Addtodoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer()
{
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take a shower"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm  activityArr={activityArr} setActivityArr={setActivityArr}/>
                <Todolist activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default Todocontainer