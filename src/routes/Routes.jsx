import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Login/Login";
import Registration from "../components/Login/Registration";
import CheckOut from "../components/CheckOut/CheckOut";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Booking from "../components/Pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";
import About from "../components/Pages/About/About";
import Services from "../components/Pages/Services/Services";
import Contact from "../components/Pages/Contact/Contact";

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>

            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
               path:"/services",
               element:<Services/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/registration",
                element:<Registration/>
            },
            {
                path:"/serviceDetails/:id",
                element:<ServiceDetails/>,
                loader:({params}) => fetch(`https://car-doctors-server-dun.vercel.app/service/${params.id}`)
            },
            {
                path:"checkout/:id",
                element:<PrivateRoute><CheckOut/></PrivateRoute>,
                loader:({params}) => fetch(`https://car-doctors-server-dun.vercel.app/service/${params.id}`)
            },
            {
                path:"booking",
                element:<PrivateRoute><Booking/></PrivateRoute>
            }
        ]
    }
])

export default Routes;