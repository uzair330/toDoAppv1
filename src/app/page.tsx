import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Input type="email" placeholder="To do list" />
        <Button type="submit">Add</Button>
      </div>
    </div>
  );
}
