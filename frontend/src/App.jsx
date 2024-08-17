import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { Home } from "./page/Home";
import Jobs from "./page/Jobs";
import Browse from "./page/Browse";
import Profile from "./page/Profile";
import JobDescription from "./components/jobComponet/JobDescription";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/browser",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  { 
    path: "/description/:id", 
    element: <JobDescription /> 
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
