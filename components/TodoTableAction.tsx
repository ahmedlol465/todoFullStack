"use client"

import { Pen, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { TableHead } from "./ui/table"
import { Spinner } from "./ui/Spinner"
import { deleteTodoAction } from "@/actions/todo.actions"
import { useState } from "react"
import EditTodoForm from "./EditTodoForm"
import { ITodo } from "@/interface"


const TodoTableAction = ({todo}: {todo:ITodo}) => {
    const [isLodding, setISLodding] = useState(false)

    
    return (

        <TableHead className="flex justify-end items-center space-x-2">
            <EditTodoForm todo={todo}/>
        
      <Button size={"icon"} variant={"destructive"} onClick={ async () => {
        setISLodding(true)
        await  deleteTodoAction({id: todo?.id})
        setISLodding(false)
      }}>
        
          {isLodding ? <Spinner/> : <Trash size={16}/>}
                  </Button>
      </TableHead>
    )
}

export default TodoTableAction