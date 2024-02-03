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
            <CardTitle>Jo karna hai</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            {[1, 2, 3].map((item) => (
              <p key={item}>Card Content</p>
            ))}
          </CardContent>

          <CardFooter>
              hi
          </CardFooter>
        </Card>
        <Separator />
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Jo karwana hai</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
export default Filter;
