import { createContext } from "react";
import { number } from "zod";

const ActiveList = createContext({
  activeListData: [],
  postAdder: () => {},
  postDeleter: () => {},
  idCnt: number,
});

export default ActiveList;
