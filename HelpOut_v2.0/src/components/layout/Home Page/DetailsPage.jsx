import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function DetailsPage({ rowData, setDisplay }) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(rowData.amount);
  return (
    <>
      <Card className=" fixed z-[60] ml-[20%] t-1 h-[500px]   min-w-[670px] w-[80%] mt-[-6%]  bg-slate-200 ring-2  ring-blue-500  shadow-lg overflow-x-hidden ">
        <div className="relative">
          <CardHeader>
            <CardTitle className="text-center itlaic text-2xl font-bold font-serif ">
              Request Details
            </CardTitle>
            {/* <CardDescription>Card Description</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 ">
              <div className="">
                <div className="capitalize md:text-xl lg:text-2xl ">
                  <Avatar className=" size-[50%] outline outline-1 ring-offset-2 ml-[25%] ">
                    <AvatarImage src={rowData.Profile} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center font-bold m-2">
                  <p className="text-2xl ">{rowData.Name}</p>
                  <p className="text-md">{rowData.College}</p>
                  <p className="text-md "> +91 {rowData.Contact}</p>
                </div>
              </div>
              <div className="col-span-2">
                {rowData.Explain && (
                  <div>
                    <p className="mb-1 text-lg font-bold text-red-900">
                      Description:
                    </p>

                    <p className="text-md ">{rowData.Explain}</p>
                  </div>
                )}

                <div className="grid grid-cols-3 m-4 ">
                  {rowData.Attachment && (
                    <div className="col-span-2">
                      <p className="mb-1 ml-[-15px] text-lg font-bold text-red-900">
                        Attachments:
                      </p>
                      <iframe src={rowData.Attachment} className="m-3 w-[200px]" />
                    </div>
                  )}

                  <div className="m-3 items-center flex flex-col justify-center ">
                    <div className="mt-1">
                      <Button className="bg-red-500 p-3 w-[200px] cursor-auto ">
                        {" "}
                        Deadline : {rowData.deadline}
                      </Button>
                    </div>
                    <div className="m-1">
                      <Button className="bg-blue-500 p-3 w-[150px] cursor-auto">
                        {" "}
                        Commision : {formatted}
                      </Button>
                    </div>
                    <div className="m-3">
                      <Button className="bg-green-600  w-[130px] h-[50px] min-w-[80px] text-xl  mt-5 hover:bg-purple-500 active:bg-purple-900" onClick={()=> setDisplay(false)}>
                        {" "}
                        Accept{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <Button className="absolute z-[100] right-0 top-0 bg-red-400 rounded-sm text-white font-bold text-2xl hover:bg-red-700 active:bg-black "  onClick={()=> setDisplay(false)} >
            <IoClose />
          </Button>
        </div>
      </Card>
    </>
  );
}
export default DetailsPage;
