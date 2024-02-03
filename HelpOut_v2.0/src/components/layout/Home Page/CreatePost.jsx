import { Button } from "@/components/ui/button";

function CreatePost({ setCurrPage }) {
  return (
    <>
      <Button variant="default" onClick={() => setCurrPage("createPost")}
      className="transition ease-in-out bg-purple-500 hover:scale-110 md:text-xl lg:text-2xl font-normal hover:bg-green-500 shadow-lg rounded-full"
      size="lg">
        Create Post
      </Button>
    </>
  );
}
export default CreatePost;
