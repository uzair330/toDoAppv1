import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SubmissionData = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-sm items-center space-x-2 ">
        <Input type="email" placeholder="To do list" />
        <Button type="submit">Add</Button>
      </div>
    </div>
  );
};

export default SubmissionData;
