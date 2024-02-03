import { useContext } from "react";
import ActiveList from "../../../store/ActiveList";
import { RequestCard } from "./RequestCard";
import CreatePost from "./CreatePost";
import Filter from "./Filters";

function Home({ setCurrPage }) {
  const List = useContext(ActiveList);
  return (
    <body>
      <div className="bg-gradient-to-r from-gray-500 to-zinc-500">
        <div className="pt-[100px] flex justify-between align-center ">
          <div className="w-full h-screen flex justify-center">
            {[1].map((items) => (
              <RequestCard
                key={items.Deadline}
                Name={items.Name}
                College={items.College}
                Commision={items.Commision}
                Help={items.Help}
                Deadline={items.Deadline}
                Profile={items.Picture}
                Attachment={items.Attachment}
                Description={items.Explain}
                Contact={items.Contact}
              />
            ))}
          </div>
          <div className="w-[400px]">
            <Filter setCurrPage={setCurrPage} />
          </div>
        </div>
      </div>
    </body>
  );
}
export default Home;
