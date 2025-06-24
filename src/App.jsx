import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
// import ScrollToTop from "./utils/ScrollToTop";
import Dashboard from "./components/user/navbarLinks/dashboard/Dashboard";
import CarRent from "./components/user/navbarLinks/CarRent";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signup" replace />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },

  {
    path: "/home",
    element: (
      <>
        {/* <ScrollToTop /> */}
        <ProtectedRoute>
          <HomeLayoutPage />
        </ProtectedRoute>
      </>
    ),
    errorElement: <ErrorPage />,
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
        element: (
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
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

  {
    path: "/unauthorized",
    element: <Unauthorized />,
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
