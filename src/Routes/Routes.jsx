import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Weedings from "../Pages/Services/Weddings";
import Birthday from "../Pages/Services/Birthday";
import Anniversaries from "../Pages/Services/Anniversaries";
import Engagement from "../Pages/Services/Engagement";
import Retirement from "../Pages/Services/Retirement";
import BabyShower from "../Pages/Services/BabyShower";

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
                path: "/birthday",
                element: <Birthday></Birthday>
            },
            {
                path: "/anniversary",
                element: <Anniversaries></Anniversaries>
            },
            {
                path: "/engagement",
                element: <Engagement></Engagement>
            },
            {
                path: "/retirement",
                element: <Retirement></Retirement>
            },
            {
                path: "/babyshower",
                element: <BabyShower></BabyShower>
            }
        ]
    },
]);

export default routes;