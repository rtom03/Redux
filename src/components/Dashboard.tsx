import { Link } from "react-router-dom";
import Navbar, { RouteObject } from "../config/dashBoard.routes"; 

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col border-r w-56">
        {Navbar.map((route: RouteObject) => (
          <div key={route.path} className="gap-4 p-4 flex flex-row mt-2 hover:bg-gray-600 ml-4 mr-4 rounded-md h-12 text-center">
            {route.icon && <route.icon className="text-xl" />} 
            <Link to={route.path} className="block">
              {route.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
