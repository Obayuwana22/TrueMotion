import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  CarDetailsPage,
  ForgotPasswordPage,
  HomeLayoutPage,
  LandingPage,
  LoginPage,
  RentalPaymentPage,
  SignUpPage,
  UserPage,
} from "./pages";
import ScrollToTop from "./utils/ScrollToTop";
import Dashboard from "./components/user/navbarLinks/dashboard/Dashboard";
import CarRent from "./components/user/navbarLinks/CarRent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
{
    path: "forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/home",
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
        path: "car/:id",
        element: <CarDetailsPage />,
      },
      {
        path: "car/:carName/rent",
        element: <RentalPaymentPage />,
      },
      {
        path: "user/:userID",
        element: <UserPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
          },
          {
            path: "car-rent",
            element: <CarRent />,
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
