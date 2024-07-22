"use server";


import { PrismaClient } from "@prisma/client";
import { ProfileFormValue} from "@/validation"
import { revalidatePath } from "next/cache";
import { ITodo } from "@/interface";


const prisma = new PrismaClient();

export const getTodoUser = async ({userId}: {userId: string | null}) => {

    return await prisma.todo.findMany({
        where: {
            userId: userId as string,
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};



export const createTodoAction = async ({ titel, body, completed, userId}: { titel: string, body?: string | null, completed: boolean, userId: string | null}) => {



    await prisma.todo.create({
        data: {
            titel,
            body,
            completed,
            userId: userId as string
        }
    })
    revalidatePath("/")  // make the fata refresh autimatic add

}

export const updateTodoAction = async ( todo: ITodo ) => { 
    await prisma.todo.update({
        where: {
            id: todo.id
        },
        data: {
            titel: todo.titel,
            body: todo.body,
            completed: todo.completed
        }
    }) 

    revalidatePath("/")
}

export const deleteTodoAction = async ({id}: {id: string  | undefined}) => {

    await prisma.todo.delete({ where: { id: id } })

    revalidatePath("/")
}