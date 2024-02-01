import { Button } from "@/components/ui/button";
import Container from "../AddHelp/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info } from "lucide-react";

function getFirstName(fullName) {
  const names = fullName.split(" ");
  return names[0];
}

function getDate(Deadline) {
  const date = Deadline.split(" ");
  return date[0];
}

function getTime(Deadline) {
  const date = Deadline.split(" ");
  return date[1];
}

function RequestCard({
  Name,
  College,
  Help,
  Commision,
  Deadline,
  Profile,
  Attachment,
  Description,
  Contact,
}) {
  return (
    <>
      <div className="w-full max-w-[600px] mx-auto flex-1 flex items-center text-[100%]">
        <div className="flex w-full rounded-md mt-2 border-2 border-black shadow-lg">
          <div className="flex items-center m-5">
            {/* Avatar */}
            {/* <Button
                variant="outline"
                className="rounded-full hover:bg-white"
              >
                <Avatar>
                  <AvatarImage
                    src={Profile}
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button> */}
            <img src={Profile} className="rounded-full w-[150px]" />
          </div>

          <div className="flex flex-col w-full p-2">
            <div className="w-full">
              <p className="font-medium text-purple-500 text-3xl">
                {getFirstName(Name)}
              </p>
              <p className="text-blue-800 text-lg">from {College}</p>
              <p className="text-pretty text-2xl">Needs {Help}</p>
            </div>

            <div className="w-full flex flex-col items-center p-1 text-red-500 font-base">
              <p className="text-xl">
                By {getTime(Deadline)} {getDate(Deadline)}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pl-4 pr-4 font-semibold">
            <Button className="w-full bg-blue-500 hover:bg-blue-500 cursor-auto text-lg p-5">
              Commission: ₹ {Commision}
            </Button>
            <Button className="w-full bg-green-500 hover:bg-purple-500 text-lg p-5">
              View Details
              <Info className="pl-3 size-8" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestCard;
