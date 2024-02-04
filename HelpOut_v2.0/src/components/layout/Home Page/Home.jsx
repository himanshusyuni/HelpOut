import { useContext } from "react";
import ActiveList from "../../../store/ActiveList";
import { RequestCard } from "./RequestCard";
import CreatePost from "./CreatePost";
import Filter from "./Filters";
import Footer from "@/components/Footer";


function Home({ setCurrPage }) {

  return (
  
      <div className="bg-slate-300 from-gray-500 to-zinc-500">
        <div className="pt-[100px] flex justify-between align-center ">
          <div className="w-full flex justify-center">
            <RequestCard  />
          </div>
          <div className="w-[400px]">
            <Filter setCurrPage={setCurrPage} />
          </div>
        </div>
        <Footer />
      </div>
  
  );
}
export default Home;
