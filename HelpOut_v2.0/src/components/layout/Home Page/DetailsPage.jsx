import { Card, CardDescription, CardHeader, CardTitle, CardContent,CardFooter} from "@/components/ui/card";

function DetailsPage({rowData}) {
  return (
    <>
      <div className="fixed z-[60] bg-white mr-[-100px] t-1 h-[900px] w-[900px] mt-[-100px] backdrop-blur-md">
        <Card >
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
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
export default DetailsPage;
