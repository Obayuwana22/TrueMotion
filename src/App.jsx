import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CarDetailsPage, HomeLayoutPage, LandingPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/car/:id",
        element: <CarDetailsPage/>,
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
