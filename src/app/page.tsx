import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SubmissionData from "@/components/SubmissionData";
import List from "@/components/List";
import TodoList from "@/components/ToDoList";

export default function Home() {
  return (
    <div className="">
      {/* <SubmissionData /> */}
      <List />
      <TodoList />
    </div>
  );
}
