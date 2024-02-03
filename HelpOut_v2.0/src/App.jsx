import CreatePost from "./components/layout/Home Page/CreatePost";
import Filter from "./components/layout/Home Page/Filters";
import Header from "./components/Header";
import Home from "./components/layout/Home Page/Home";
import AddHelpForm from "./components/layout/AddHelp/AddHelpForm";
import { Login } from "./components/layout/Login Page/Login";
import ListProvider from "./store/ListProvider";
import { useState } from "react";

function App() {

  const [currPage,setCurrPage]= useState("loginPage");

  return (
    <>
  
    {currPage==="loginPage" && <Login setCurrPage={setCurrPage}/> }
    { (currPage==="homePage" || currPage==="createPost") &&
      <ListProvider >
      <Header />
      {currPage==="homePage" && 
      <div className="pt-[100px] pl-4 flex ">
        <div className="ml-5 mr-10 text-center">
          <CreatePost setCurrPage={setCurrPage}  />
          <Filter />
        </div>
        <div className="mt-8 ml-5">
        <Home />
        </div>
      </div>}
      {currPage==="createPost" && <AddHelpForm  setCurrPage={setCurrPage}/>}
      </ListProvider>
    }
    </>
  );
}
export default App;
