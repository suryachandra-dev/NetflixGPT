import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./Utils/appStore";

function App() {
  // const myUsersList=[];
  return (
    //Provide the store to the body component
    <Provider store={appStore}>
      
      <Body/>
    </Provider>
  );
}

export default App;





// import { Provider } from "react-redux";
// import Body from "./components/Body";
// import appStore from "./Utils/appStore";
// import { createContext, useEffect, useState } from "react";

// export const context1 = createContext();

// function App() {
//   // Retrieve myUsersList from localStorage on component mount
//   const [myUsersList, setMyUsersList] = useState(() => {
//     const storedUsersList = localStorage.getItem("myUsersList");
//     return storedUsersList ? JSON.parse(storedUsersList) : [];
//   });

//   // Update localStorage whenever myUsersList changes
//   useEffect(() => {
//     localStorage.setItem("myUsersList", JSON.stringify(myUsersList));
//   }, [myUsersList]);

//   return (
//     // Provide the store and myUsersList to the Body component
//     <Provider store={appStore}>
//       <context1.Provider value={{ myUsersList, setMyUsersList }}>
//         <Body />
//       </context1.Provider>
//     </Provider>
//   );
// }

// export default App;
