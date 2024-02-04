import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import CreatePost from "./CreatePost";

function Filter({setCurrPage}) {
  return (
    <>
      <div className="flex flex-col gap-4 p-5">
        <CreatePost setCurrPage={setCurrPage}/>
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-center">Pending  Work</CardTitle>
            <hr className="shadow-sm"/>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
           <p className="text-center text-sm">No work</p>
          </CardContent>

          <CardFooter>
              
          </CardFooter>
        </Card>
        <Separator />
        <Card className="border-none">
          <CardHeader>
            <CardTitle className="text-center">Your Requests</CardTitle>
            <hr className="shadow-sm" />
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-sm">No Requests</p>
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default Filter;
