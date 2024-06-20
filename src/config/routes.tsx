import { RouteObject } from "react-router-dom";
import   Home   from "../components/dashboard/Home";
import ChatRoom from "../components/dashboard/ChatRoom";
import Favorites from "../components/dashboard/Favorites";
import Notification from "../components/dashboard/Notification";
import Subscriptions from "../components/dashboard/Subscriptions";
import PaymentMethod from "../components/dashboard/PaymentMethod";
import LogOut from "../components/dashboard/LogOut";
import DashBoard from "../components/dashboard/DashBoard";


const DashboardRoutes:RouteObject[] = [
    
    {
        path:'/',
        element:<DashBoard />
    },{
        path:'/home',
        element:<Home />
    },{
        path:'/chatroom',
        element:<ChatRoom />
    },{
        path:'/favorites',
        element:<Favorites />
    },{
        path:'/notifications',
        element:<Notification />
    },{
        path:'/subscriptions',
        element:<Subscriptions />
    },{
        path:'paymentmethods',
        element:<PaymentMethod />
    },{
        path:'logout',
        element:<LogOut />
    }
]
export  default DashboardRoutes;