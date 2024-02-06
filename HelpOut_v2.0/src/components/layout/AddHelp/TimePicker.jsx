import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoTimeOutline } from "react-icons/io5";

import { Input } from "../../ui/input";

export function TimePicker() {
  const [time, setTime] = useState("");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal text-xl",
            !time && "text-muted-foreground"
          )}
        >
          <IoTimeOutline className="mr-2 h-5 w-5" />
          {time ? <span>{time}</span> : <span>Pick a time</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="p-4">
          <Input
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
