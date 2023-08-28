"use client";
import { useState } from "react";
import { Library } from "lucide-react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const List02 = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    <div className="bg-blue-700 w-full h-screen flex justify-center items-center ">
      <div className="m-2 bg-white w-[400px] h-auto p-5 rounded-lg shadow-lg">
        <div className="flex justify-left">
          <div className="flex gap-2">
            <span className=" text-blue-700 text-xl font-extrabold  lg:text-3xl ">
              To do List App
            </span>
            <Library size={35} className="text-blue-700" />
          </div>
        </div>
        <div className="grid grid-cols-[1fr,auto] py-5">
          <div className="">
            <Input
              className="h-8"
              required
              type="text"
              placeholder="Create list of tasks"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="">
            <Button className="h-8 mx-2" type="submit" onClick={handleAddTodo}>
              Add
            </Button>
          </div>
        </div>

        <div className="">
          <div className="max-w-md mx-auto ">
            <div className="flex justify-center px-20"></div>
            <Table>
              <TableCaption className="py-5 font-semibold text-xs">
                To do List App using Nextjs 13 by{" "}
                <span className="text-blue-700 font-bold">Muhammad Uzair.</span>
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-black font-semibold">
                    Sr.no
                  </TableHead>

                  <TableHead className="text-black font-semibold">
                    To do list
                  </TableHead>
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
        <p className="text-red-500 font-semibold text-md text-center ">
          {errorMessage}
        </p>
      </div>
    </div>
  );
};

export default List02;
