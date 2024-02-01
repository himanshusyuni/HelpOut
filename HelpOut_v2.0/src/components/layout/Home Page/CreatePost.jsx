import { Button } from "@/components/ui/button";


function CreatePost({setCurrPage}) {
  return (
    <>
      <Button variant="default" onClick={()=> setCurrPage("createPost")}>
        Create Post
        </Button> 
      
    </>
  );
}
export default CreatePost;
