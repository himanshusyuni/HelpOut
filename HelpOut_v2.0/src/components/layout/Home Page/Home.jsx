import { RequestCard } from "./RequestCard";
import Filter from "./Filters";


function Home({ setCurrPage }) {  
  return (
  
      <div className="bg-gradient-to-r from-gray-500 to-zinc-500">
        <div className="pt-[100px] flex justify-between align-center ">
          <div className="w-full h-screen flex justify-center">
            <RequestCard />
          </div>
          <div className="w-[400px]">
            <Filter setCurrPage={setCurrPage} />
          </div>
        </div>
      </div>
  
  );
}
export default Home;
