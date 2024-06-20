import { Route, Routes } from "react-router-dom"
import DashboardRoutes from "./config/routes"
import MainLayout from "./pages/MainLayout"




function App() {
  
  return (

    <Routes>
      <Route path="/" element={<MainLayout/>}>
        {DashboardRoutes.map((routes)=>(
           <Route key={routes.path}
           path={routes.path}
           element={routes.element}
              />
        ))}
        </Route>
    </Routes>
       
  )
}

export default App
