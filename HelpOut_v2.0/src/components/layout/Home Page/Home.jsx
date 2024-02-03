import { useContext } from "react";
import ActiveList from "../../../store/ActiveList";
import RequestCard from "./RequestCard";

function Home() {
  const {activeListData} = useContext(ActiveList);
  return (
    <>
      <div>
        {activeListData.map((items) => (
          <RequestCard
            key={items.id} 
            postData={items}
          />
        ))}
      </div>
    </>
  );
}
export default Home;
