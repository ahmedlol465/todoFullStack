"use client"
import { Button } from "@/components/ui/button";
import { Flag, Pen, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { ProfileFormValue, todoFormSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { Spinner } from "./ui/Spinner";
import { boolean } from "zod";
import { ITodo } from "@/interface";
import { updateTodoAction } from "@/actions/todo.actions";

const EditTodoForm = ({todo}: {todo:ITodo}) => {

  
  
    const defaultValues: ProfileFormValue = {
        titel: todo.titel,
        body: todo.body as string,
        completed: todo.completed,
      };
      
      const form = useForm<ProfileFormValue>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange"
      });
      
      const [loading, setLoading] = useState(false);
      const [open, setOpen] = useState(false);
    
      
      const onSubmit = async (data: ProfileFormValue) => {
        setLoading(true)
            await updateTodoAction({id: todo?.id, titel: data.titel, body: data.body as string, completed: data.completed});
          setLoading(false)
          setOpen(false)
      };


    
    return (
        

        <main className="flex flex-col items-center justify-between ">


    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>

                <Button>
                       <Pen size={16}/>
                    </Button>

        </DialogTrigger>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                </DialogDescription>
            </DialogHeader>
  


            <div className="grid gap-4 py-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8"> 
                        <FormField
                            control={form.control}
                            name="titel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Titel</FormLabel>
                                    <FormControl>
                                        <Input placeholder="got to gem" {...field} />

                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="body"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>short desc</FormLabel>
                                    <FormControl>
                                        {/* <Input placeholder="Your Name" {...field} /> */}
                                        <Textarea placeholder="Your Name" {...field} className="resize-none" />

                                    </FormControl>
                                    <FormDescription>
                                        Enter your full name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                                


                        <FormField
                        
                           control={form.control}
                            name="completed"
                            render={({ field }) => (
                                <FormItem >
                                    <div  className="flex items-center">

                                    <FormControl className="mx-2" >

                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                    </FormControl>
                                    <FormLabel>Complete</FormLabel>
                                    </div>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />




                                <Button type="submit">
   
                                {loading ? <><Spinner/> Save</> : 'Save changes'}
                                </Button>
                    </form>
                </Form>
    
            </div>
        </DialogContent>
    </Dialog>

            </main>
                        )
}


export default EditTodoForm