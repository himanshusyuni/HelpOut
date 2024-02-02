import { useContext } from "react";
import ActiveList from "../../../store/ActiveList";
import {RequestCard} from "./RequestCard";
import CreatePost from "./CreatePost";
import Filter from "./Filters";

function Home({ setCurrPage }) {
  const List = useContext(ActiveList);
  return (
    <>
      <div className="pt-[100px] flex justify-between align-center ">
        <div className="w-full h-screen  bg-gradient-to-r from-red-500 to-emerald-500 flex justify-center">
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
        <div className="bg-black text-center">
          <CreatePost setCurrPage={setCurrPage} />
          <Filter />
        </div>
      </div>
    </>
  );
}
export default Home;
