import ActiveList from "./ActiveList";
const byDefaultList = [
  {
    Name: "Himanshu Syuni",
    Picture:
      "https://tse1.mm.bing.net/th?id=OIP.VzOnkxCRm3IVkbbU5s8OyQHaH8&pid=Api&P=0&h=220",
    College: "DTU",
    Help: "Internship",
    Deadline: "26/01/2024 9:15 AM",
    Commision: 10,
    Explain:
      "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
    Contact: "9999129349",
    Attachement:
      "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
  },
  {
    Name: "Harshiv Ganwani",
    Picture:
      "https://tse1.mm.bing.net/th?id=OIP.grsJGeTjezxHVy7TT0ebSQAAAA&pid=Api&P=0&h=220",
    College: "DTU",
    Help: "Medicines",
    Deadline: "25/01/2024 9:15 AM",
    Commision: 10,
    Explain:
      "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
    Contact: "9999129349",
    Attachement:
      "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
  },
  {
    Name: "Harsh Tayal",
    Picture:
      "https://tse2.mm.bing.net/th?id=OIP.sWJVwhv8BcCG2w6HeBPtQgHaJ0&pid=Api&P=0&h=220",
    College: "DTU",
    Help: "Korean",
    Deadline: "27/01/2024 9:15 AM",
    Commision: 60,
    Explain:
      "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
    Contact: "9999129349",
    Attachement:
      "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
  },
  
];
function ListProvider({ children }) {
  return (
    <ActiveList.Provider value={byDefaultList}>{children}</ActiveList.Provider>
  );
}
export default ListProvider;
