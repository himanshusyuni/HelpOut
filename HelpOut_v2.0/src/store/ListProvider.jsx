import { useReducer, useState } from "react";
import ActiveList from "./ActiveList";
function ListProvider({ children }) {
  const [idCnt, setCnt] = useState(4);
  const DefaultList = [
    {
      id: 1,
      Name: "Himanshu Syuni",
      Profile:
        "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=",
      College: "DTU",
      Request: "Internship",
      deadline: "9:15 2024.10.01",
      amount: 100,
      Explain:
        `I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.  India, a land steeped in history and tradition, stands as one of the most vibrant and diverse nations on the planet. Nestled in South Asia, this vast country has been the cradle of ancient civilizations, a melting pot of cultures, and a beacon of resilience and progress. From its rich cultural tapestry to its rapid economic growth, India is a fascinating mosaic that captivates the world's attention.

        Historical Legacy:
        
        India's history dates back thousands of years, with a civilization that flourished along the banks of the Indus and Ganges rivers. The country has witnessed the rise and fall of empires, the spread of religions like Hinduism and Buddhism, and the influence of various dynasties and rulers. The cultural heritage of India is reflected in its art, architecture, literature, and philosophy, leaving an indelible mark on the global cultural landscape.
        
        Cultural Diversity:
        
        One of India's defining characteristics is its incredible cultural diversity. With a population comprising various ethnicities, languages, and traditions, the country is a microcosm of unity in diversity. From the colorful festivals of Holi and Diwali to the classical dance forms like Bharatanatyam and Kathak, India's cultural richness is a testament to the coexistence of myriad traditions.
        
        Religious Pluralism:
        
        India is a land where different religions have thrived side by side for centuries. Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism, among others, have coexisted, contributing to the nation's ethos of religious tolerance. The diversity of religious practices and festivals adds another layer to the cultural mosaic of India.
        
        Economic Growth and Challenges:
        
        In recent decades, India has emerged as a global economic powerhouse. The country has witnessed significant progress in sectors like information technology, pharmaceuticals, and space exploration. The entrepreneurial spirit of the people, coupled with a large and diverse workforce, has propelled India into the ranks of the world's fastest-growing economies. However, challenges such as income inequality, poverty, and environmental issues persist, requiring concerted efforts for sustainable development.
        
        Technological Advancements:
        
        India has embraced the digital era with gusto, becoming a hub for technology and innovation. The Information Technology sector, in particular, has played a pivotal role in shaping India's global identity. With a burgeoning startup culture, advancements in artificial intelligence, and a focus on digital connectivity, India is at the forefront of technological progress.
        
        Challenges and Opportunities:
        
        Despite its achievements, India grapples with numerous challenges, ranging from social issues like caste discrimination and gender inequality to environmental concerns and infrastructural deficits. However, these challenges also present opportunities for growth and transformation. The nation's commitment to inclusive development and sustainable practices reflects a determination to overcome obstacles and build a better future.
        
        Conclusion:
        
        India, with its ancient heritage and modern dynamism, continues to evolve as a complex and fascinating tapestry. The resilience of its people, the richness of its culture, and the strides in economic and technological spheres position India as a key player on the global stage. As the country navigates the complexities of the 21st century, it carries forward a legacy that celebrates diversity, progress, and the enduring spirit of India.`,
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 2,
      Name: "Harshiv Ganwani",
      Profile:
        "https://scontent.cdninstagram.com/v/t51.2885-19/419550973_1309736429631626_1558150364497870473_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=a0SG2Hu5vw4AX-MS47Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCEM9aPeLt912XMYOiysbzcaKmLTR0uvFAzGEfaNKgi0A&oe=65C3FA7F",
      College: "DTU",
      Request: "Medicines",
      deadline: "9:15 2024.10.01",
      amount: 200,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 3,
      Name: "Harsh Tayal",
      Profile:
        "https://media.licdn.com/dms/image/D4D03AQFlutSIT9RAHw/profile-displayphoto-shrink_800_800/0/1673764856312?e=1712188800&v=beta&t=zYZ3rvR0QBGqUaHmFkolib-nLmnUR5a0pgKfGQ3oqLY",
      College: "DTU",
      Request: "Printout",
      deadline: "9:15 2024.10.01",
      amount: 160,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://drive.google.com/file/d/1nMqY-2MBwNzM47_MWLxNfOJia6UYtbln/view?usp=sharing",
    },
    {
      id: 4,
      Name: "Himanshu Syuni",
      Profile:
        "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Clipart.png",
      College: "DTU",
      Request: "Notebook",
      deadline: "9:15 2024.10.01",
      amount: 180,
      Explain:
        "",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 5,
      Name: "Harshiv Ganwani",
      Profile:
        "https://scontent.cdninstagram.com/v/t51.2885-19/419550973_1309736429631626_1558150364497870473_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=a0SG2Hu5vw4AX-MS47Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCEM9aPeLt912XMYOiysbzcaKmLTR0uvFAzGEfaNKgi0A&oe=65C3FA7F",
      College: "DTU",
      Request: "Lab coat",
      deadline: "9:15 2024.10.01",
      amount: 10,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 6,
      Name: "Harsh Tayal",
      Profile:
        "https://media.licdn.com/dms/image/D4D03AQFlutSIT9RAHw/profile-displayphoto-shrink_800_800/0/1673764856312?e=1712188800&v=beta&t=zYZ3rvR0QBGqUaHmFkolib-nLmnUR5a0pgKfGQ3oqLY",
      College: "DTU",
      Request: "Korean",
      deadline: "9:15 2024.10.01",
      amount: 60,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://drive.google.com/file/d/1nMqY-2MBwNzM47_MWLxNfOJia6UYtbln/view?usp=sharing",
    },
    {
      id: 7,
      Name: "Himanshu Syuni",
      Profile:
        "https://media.istockphoto.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530829125?k=6&m=530829125&s=612x612&w=0&h=Z76VH4c_W2aJ6UdUnjuCtLssjlFVNwNEns5VVNpH1Mg=",
      College: "DTU",
      Request: "Internship",
      deadline: "9:15 2024.10.01",
      amount: 100,
      Explain:
        `I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.  India, a land steeped in history and tradition, stands as one of the most vibrant and diverse nations on the planet. Nestled in South Asia, this vast country has been the cradle of ancient civilizations, a melting pot of cultures, and a beacon of resilience and progress. From its rich cultural tapestry to its rapid economic growth, India is a fascinating mosaic that captivates the world's attention.

        Historical Legacy:
        
        India's history dates back thousands of years, with a civilization that flourished along the banks of the Indus and Ganges rivers. The country has witnessed the rise and fall of empires, the spread of religions like Hinduism and Buddhism, and the influence of various dynasties and rulers. The cultural heritage of India is reflected in its art, architecture, literature, and philosophy, leaving an indelible mark on the global cultural landscape.
        
        Cultural Diversity:
        
        One of India's defining characteristics is its incredible cultural diversity. With a population comprising various ethnicities, languages, and traditions, the country is a microcosm of unity in diversity. From the colorful festivals of Holi and Diwali to the classical dance forms like Bharatanatyam and Kathak, India's cultural richness is a testament to the coexistence of myriad traditions.
        
        Religious Pluralism:
        
        India is a land where different religions have thrived side by side for centuries. Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism, among others, have coexisted, contributing to the nation's ethos of religious tolerance. The diversity of religious practices and festivals adds another layer to the cultural mosaic of India.
        
        Economic Growth and Challenges:
        
        In recent decades, India has emerged as a global economic powerhouse. The country has witnessed significant progress in sectors like information technology, pharmaceuticals, and space exploration. The entrepreneurial spirit of the people, coupled with a large and diverse workforce, has propelled India into the ranks of the world's fastest-growing economies. However, challenges such as income inequality, poverty, and environmental issues persist, requiring concerted efforts for sustainable development.
        
        Technological Advancements:
        
        India has embraced the digital era with gusto, becoming a hub for technology and innovation. The Information Technology sector, in particular, has played a pivotal role in shaping India's global identity. With a burgeoning startup culture, advancements in artificial intelligence, and a focus on digital connectivity, India is at the forefront of technological progress.
        
        Challenges and Opportunities:
        
        Despite its achievements, India grapples with numerous challenges, ranging from social issues like caste discrimination and gender inequality to environmental concerns and infrastructural deficits. However, these challenges also present opportunities for growth and transformation. The nation's commitment to inclusive development and sustainable practices reflects a determination to overcome obstacles and build a better future.
        
        Conclusion:
        
        India, with its ancient heritage and modern dynamism, continues to evolve as a complex and fascinating tapestry. The resilience of its people, the richness of its culture, and the strides in economic and technological spheres position India as a key player on the global stage. As the country navigates the complexities of the 21st century, it carries forward a legacy that celebrates diversity, progress, and the enduring spirit of India.`,
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 8,
      Name: "Harshiv Ganwani",
      Profile:
        "https://scontent.cdninstagram.com/v/t51.2885-19/419550973_1309736429631626_1558150364497870473_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=a0SG2Hu5vw4AX-MS47Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCEM9aPeLt912XMYOiysbzcaKmLTR0uvFAzGEfaNKgi0A&oe=65C3FA7F",
      College: "DTU",
      Request: "Medicines",
      deadline: "9:15 2024.10.01",
      amount: 200,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 9,
      Name: "Harsh Tayal",
      Profile:
        "https://media.licdn.com/dms/image/D4D03AQFlutSIT9RAHw/profile-displayphoto-shrink_800_800/0/1673764856312?e=1712188800&v=beta&t=zYZ3rvR0QBGqUaHmFkolib-nLmnUR5a0pgKfGQ3oqLY",
      College: "DTU",
      Request: "Printout",
      deadline: "9:15 2024.10.01",
      amount: 160,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://drive.google.com/file/d/1nMqY-2MBwNzM47_MWLxNfOJia6UYtbln/view?usp=sharing",
    },
    {
      id: 10,
      Name: "Himanshu Syuni",
      Profile:
        "https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Clipart.png",
      College: "DTU",
      Request: "Notebook",
      deadline: "9:15 2024.10.01",
      amount: 180,
      Explain:
        "",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 11,
      Name: "Harshiv Ganwani",
      Profile:
        "https://scontent.cdninstagram.com/v/t51.2885-19/419550973_1309736429631626_1558150364497870473_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=a0SG2Hu5vw4AX-MS47Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfCEM9aPeLt912XMYOiysbzcaKmLTR0uvFAzGEfaNKgi0A&oe=65C3FA7F",
      College: "DTU",
      Request: "Lab coat",
      deadline: "9:15 2024.10.01",
      amount: 10,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://tse3.mm.bing.net/th?id=OIP.NeQdgpAVbdBHMeTVEIGNgAHaI-&pid=Api&P=0&h=220",
    },
    {
      id: 12,
      Name: "Harsh Tayal",
      Profile:
        "https://media.licdn.com/dms/image/D4D03AQFlutSIT9RAHw/profile-displayphoto-shrink_800_800/0/1673764856312?e=1712188800&v=beta&t=zYZ3rvR0QBGqUaHmFkolib-nLmnUR5a0pgKfGQ3oqLY",
      College: "DTU",
      Request: "Korean",
      deadline: "9:15 2024.10.01",
      amount: 60,
      Explain:
        "I have attached the file to this email for your convenience. If it's possible, I would appreciate it if you could print [number of copies needed] copies of the document. Additionally, please let me know if there are any specific printing instructions or preferences I should be aware of.",
      Contact: "9999129349",
      Attachment:
        "https://drive.google.com/file/d/1nMqY-2MBwNzM47_MWLxNfOJia6UYtbln/view?usp=sharing",
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
