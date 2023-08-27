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

  const handleAddTodo = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDeleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <div className="flex w-full max-w-sm items-center space-x-2 ">
          <Input
            type="text"
            placeholder="To do list"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit" onClick={handleAddTodo}>
            Add
          </Button>
        </div>
      </div>
      <div className="flex justify-center px-20">
        <Table>
          <TableCaption>
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
                  <Button onClick={() => handleDeleteTodo(index)}>
                    Delete
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
