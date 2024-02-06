import Header from "./components/Header";
import Home from "./components/layout/Home Page/Home";
import AddHelpForm from "./components/layout/AddHelp/AddHelpForm";
import { Login } from "./components/layout/Login Page/Login";
import ListProvider from "./store/ListProvider";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const [currPage, setCurrPage] = useState("homePage");

  return (
    <>
      {currPage === "loginPage" && (
        <div>
          <Login setCurrPage={setCurrPage} />
          <Toaster />
        </div>
      )}
      {(currPage === "homePage" || currPage === "createPost") && (
        <ListProvider>
          <Header />
          {currPage === "homePage" && <Home setCurrPage={setCurrPage} />}
          {currPage === "createPost" && (
            <AddHelpForm setCurrPage={setCurrPage} />
          )}
        </ListProvider>
      )}
    </>
  );
}
export default App;
