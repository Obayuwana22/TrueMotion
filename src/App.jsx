import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayoutPage, LandingPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="font-plus-jakarta bg-gray-body">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
