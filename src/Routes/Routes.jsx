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

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/weddings",
                element: <Weedings></Weedings>
            },
            {
                path: "/weddings/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('weddingslist.json')
            },
            {
                path: "/birthday",
                element: <Birthday></Birthday>
            },
            {
                path: "/birthday/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('birthdaylist.json')
            },
            {
                path: "/anniversary",
                element: <Anniversaries></Anniversaries>
            },
            {
                path: "/anniversary/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('anniversarylist.json')
            },
            {
                path: "/engagement",
                element: <Engagement></Engagement>
            },
            {
                path: "/engagement/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('engagementlist.json')
            },
            {
                path: "/retirement",
                element: <Retirement></Retirement>
            },
            {
                path: "/retirement/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('retirementlist.json')
            },
            {
                path: "/babyshower",
                element: <BabyShower></BabyShower>
            },
            {
                path: "/babyshower/:id",
                element: <ServicesDetails></ServicesDetails>,
                loader: () => fetch('babyshowerlist.json')
            }
        ]
    },
]);

export default routes;