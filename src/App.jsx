import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  ForgotPasswordPage,
  HomeLayoutPage,
  LandingPage,
  LoginPage,
  SignUpPage,
} from "./pages";
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
