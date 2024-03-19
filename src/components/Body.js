import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import CheckYourMail from "./CheckYourMail";
import Dummy from "../Utils/Dummy";
const Body = () => {
    const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
        {
          path:'/forgotPassword',
          element: <ForgotPassword />,
        },
        {
          path:'/checkyourmail/:emailRef',
          element: <CheckYourMail/>,
        },
        {
          path: "/dummy",
          element: <Dummy />,
        }
        
      ]);
  
  return (
    <div>
      <RouterProvider router={appRouter}/>

      
    </div>
  );
};

export default Body;
