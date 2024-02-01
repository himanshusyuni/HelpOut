import CreatePost from "./components/CreatePost";
import Filter from "./components/Filters";
import Header from "./components/Header";
import Home from "./components/Home";
import ListProvider from "./store/ListProvider";

function App() {
  return (
    <>
    <ListProvider >
      <Header />
      <div className="pt-[100px] pl-4 flex ">
        <div className="ml-5 mr-10 text-center">
          <CreatePost />
          <Filter />
        </div>
        <div className="mt-8 ml-5">

        <Home />
        </div>
      </div>
      </ListProvider>
    </>
  );
}
export default App;