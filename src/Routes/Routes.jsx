import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Weedings from "../Pages/Services/Weddings";
import Birthday from "../Pages/Services/Birthday";
import Anniversaries from "../Pages/Services/Anniversaries";
import Engagement from "../Pages/Services/Engagement";
import Retirement from "../Pages/Services/Retirement";
import BabyShower from "../Pages/Services/BabyShower";
import ServicesDetails from "../Pages/Shared/ServicesDetails/ServicesDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/weddings",
                element: <Weedings></Weedings>
            },
            {
                path: "/weddings/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('weddingslist.json')
            },
            {
                path: "/birthday",
                element: <Birthday></Birthday>
            },
            {
                path: "/birthday/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute> ,
                loader: () => fetch('birthdaylist.json')
            },
            {
                path: "/anniversary",
                element: <Anniversaries></Anniversaries>
            },
            {
                path: "/anniversary/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('anniversarylist.json')
            },
            {
                path: "/engagement",
                element: <Engagement></Engagement>
            },
            {
                path: "/engagement/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('engagementlist.json')
            },
            {
                path: "/retirement",
                element: <Retirement></Retirement>
            },
            {
                path: "/retirement/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('retirementlist.json')
            },
            {
                path: "/babyshower",
                element: <BabyShower></BabyShower>
            },
            {
                path: "/babyshower/:id",
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: () => fetch('babyshowerlist.json')
            }
        ]
    },
]);

export default routes;