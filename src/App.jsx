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
    <div className="px-5 font-plus-jakarta pb-5 xl:px-0">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
