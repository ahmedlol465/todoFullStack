"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Pen, Trash } from "lucide-react"
import { ProfileFormValue } from "@/validation"

import { ITodo } from "@/interface"
import { deleteTodoAction } from "@/actions/todo.actions"
import { useState } from "react"
import { Spinner } from "./ui/Spinner"
import TodoTableAction from "./TodoTableAction"
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  
  export default function TodoTable({todo}: {todo: ITodo[]}) {


    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Commpleted</TableHead>
                    <TableHead className="text-right px-10">
                        Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todo.map((todo) => (

            <TableRow key={todo.id}>
              <TableCell className="font-medium">{todo.id}</TableCell>

              <TableCell>{todo.titel}</TableCell>
              <TableCell>{todo.completed ? <Badge>Completed</Badge> : <Badge variant={"secondary"}>Not Completed</Badge>}</TableCell>
              <TableCell className="text-right">
       
                  <TodoTableAction todo={todo}/>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{!todo.length ? "you dont have any yet" : todo.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }


