import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  CarDetailsPage,
  CarsPage,
  MyBookingsPage,
  HomeLayoutPage,
  LandingPage,
} from "./pages";
import {
  AddCarPage,
  DashboardPage,
  ManageBookingsPage,
  ManageCarsPage,
  OwnerLayoutPage,
} from "./pages/owner";
import ErrorPage from "./components/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <ProtectedRoute> */}
        {<HomeLayoutPage />}
        {/* </ProtectedRoute> */}
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "car-details/:id",
        element: <CarDetailsPage />,
      },
      {
        path: "cars",
        element: <CarsPage />,
      },
      {
        path: "my-bookings",
        element: <MyBookingsPage />,
      },
    ],
  },
  {
    path: "/owner",
    element: <OwnerLayoutPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "add-car",
        element: <AddCarPage />,
      },
      {
        path: "manage-cars",
        element: <ManageCarsPage />,
      },
      {
        path: "manage-bookings",
        element: <ManageBookingsPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="font-plus-jakarta bg-gray-background text-secondary-500 ">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
