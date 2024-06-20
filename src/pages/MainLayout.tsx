
import { Outlet } from 'react-router-dom'
import Dashboard from '../components/Dashboard'


const MainLayout = () => {
  return (
    <div>
      <div className='flex flex-row '>
        
        <Dashboard />
     <div className='mt-4'>
     <Outlet />
     </div>
     
      </div>
    </div>
  )
}

export default MainLayout
