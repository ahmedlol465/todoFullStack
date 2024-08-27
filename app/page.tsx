
import { getTodoUser } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTables";
import { auth } from "@clerk/nextjs/server";
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
