import { useReducer, useState } from "react";
import ActiveList from "./ActiveList";
function ListProvider({ children }) {
  const [idCnt, setCnt] = useState(4);
  const DefaultList = [
    {
      id: 1,
      Name: "Himanshu Syuni",
      Profile:
        "https://tse1.mm.bing.net/th?id=OIP.VzOnkxCRm3IVkbbU5s8OyQHaH8&pid=Api&P=0&h=220",
      College: "DTU",
      Request: "Internship",
      deadline: "9:15 2024.10.01",
      amount: 10,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachement:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      Name: "Harshiv Ganwani",
      Profile:
        "https://tse1.mm.bing.net/th?id=OIP.grsJGeTjezxHVy7TT0ebSQAAAA&pid=Api&P=0&h=220",
      College: "DTU",
      Request: "Medicines",
      deadline: "9:15 2024.10.01",
      amount: 10,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachement:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      Name: "Harsh Tayal",
      Profile:
        "https://tse2.mm.bing.net/th?id=OIP.sWJVwhv8BcCG2w6HeBPtQgHaJ0&pid=Api&P=0&h=220",
      College: "DTU",
      Request: "Korean",
      deadline: "9:15 2024.10.01",
      amount: 60,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachement:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
  ];

  const ActiveListReducer = (currActiveList, action) => {
    let newActiveList = currActiveList;
    if (action.type === "deletePost") {
      newActiveList = currActiveList.filter(
        (item) => item.id !== action.postId
      );
    }
    if (action.type === "addPost") {
      newActiveList = [...currActiveList, action.newPost];
      let newCnt = idCnt + 1;
      setCnt(newCnt);
    }

    return newActiveList;
  };

  const [ActiveListData, dispatchActiveList] = useReducer(
    ActiveListReducer,
    DefaultList
  );

  const postAdder = (newPost) => {
    dispatchActiveList({
      type: "addPost",
      newPost,
    });
  };
  const postDeleter = (postId) => {
    dispatchActiveList({
      type: "deletePost",
      postId: postId,
    });
  };

  return (
    <ActiveList.Provider
      value={{
        activeListData: ActiveListData,
        postAdder: postAdder,
        postDeleter: postDeleter,
        idCnt: idCnt,
      }}
    >
      {children}
    </ActiveList.Provider>
  );
}
export default ListProvider;
