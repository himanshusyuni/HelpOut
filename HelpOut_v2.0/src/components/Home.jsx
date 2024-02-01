import { useContext } from "react";
import ActiveList from "../store/ActiveList";
import RequestCard from "./RequestCard";

function Home() {
  const List = useContext(ActiveList);
  return (
    <>
      <div>
        {List.map((items) => (
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
    </>
  );
}
export default Home;
