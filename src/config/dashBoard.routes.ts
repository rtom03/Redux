
import { IconType } from "react-icons";
import { FaHome,  } from "react-icons/fa";
import { FaBell, FaChartLine, FaHeart, FaMessage, FaNewspaper, FaWallet } from "react-icons/fa6";

export interface RouteObject {
    name: string;
    path: string;
    icon?: IconType; // Optional icon from react-icons
  }
const Navbar = [
    {
        name:'Dashboard',
        path:'/',
        icon:FaChartLine
    },
    {
        name:'Home',
        path:'/home',
        icon:FaHome
    },{
        name:'ChatRoom',
        path:'/chatroom',
        icon:FaMessage
    },{
        name:'Favorites',
        path:'/favorites' ,
        icon:FaHeart
    },{
        name:'Notification',
        path:'/notifications' ,
        icon:FaBell
    },{
        name:'Subscription',
        path:'/subscriptions',
        icon:FaNewspaper
    },{
        name:'Payment Method',
        path:'/paymentmethods',
        icon:FaWallet
    }
]


export default Navbar;