
import { getTodoUser } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import { ModeToggle } from "@/components/ModeToggel";
import TodoTable from "@/components/TodoTables";
import Nav from "@/components/ui/Nav";
import { auth } from "@clerk/nextjs/server";
import { todo } from "node:test";
import Page from "./sign-in/[[...sign-in]]/page";

export default async function Home() {



    const { userId }: { userId: string | null } = auth();  

    if (!userId) {
      // throw new Error("User ID is missing");
      // console.log("User ID is missing");
      return  <Page/>
    }

  
    const todos = await getTodoUser({userId})
    
    if (!todos) {
      throw new Error("User ID is missing");
    }


  return (
    <main className="px-14">
      
      <AddTodoForm userId={userId}/>
      <TodoTable todo={todos}/>
      
    </main>

      
  );
}
