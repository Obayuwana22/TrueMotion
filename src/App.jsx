import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CarDetailsPage,
  HomeLayoutPage,
  LandingPage,
  RentalPaymentPage,
  UserPage,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import ContentArea from "./components/user/ContentArea";
import User from "./components/user/User";

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
      {
        path: "/user/:userID",
        element: <User />,
        children: [
          {
            path: "/user/:userID/content",
            element: <ContentArea />,
          },
        ],
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
