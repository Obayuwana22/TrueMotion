import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CarDetailsPage,
  HomeLayoutPage,
  LandingPage,
  RentalPaymentPage,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <HomeLayoutPage />
      </>
    ),
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/car/:id",
        element: <CarDetailsPage />,
      },
      {
        path: "/car/:carName/rent",
        element: <RentalPaymentPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="font-plus-jakarta bg-gray-background text-secondary-500 ">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
