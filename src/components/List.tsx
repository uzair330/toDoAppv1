"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
const List = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   const handleAddTodo = () => {
  //     setTodos([...todos, inputValue]);
  //     setInputValue("");
  //   };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please Enter a task before Submitting.");
    }
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input
            required
            type="text"
            placeholder="Create list of tasks"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button type="submit" onClick={handleAddTodo}>
            Add
          </Button>
        </div>
      </div>
      <div className="max-w-md mx-auto ">
        <p className="text-red-500 font-semibold text-xl text-center py-10">
          {errorMessage}
        </p>
        <div className="flex justify-center px-20"></div>
        <Table>
          <TableCaption className="py-5">
            To do List App using Nextjs 13 by Muhammad Uzair.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Sr.no</TableHead>

              <TableHead>To do list</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map((todo, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{todo}</TableCell>

                <TableCell>
                  <Button
                    className="w-8 h-8 rounded-full"
                    onClick={() => handleDeleteTodo(index)}
                    variant={"outline"}
                  >
                    X
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default List;
