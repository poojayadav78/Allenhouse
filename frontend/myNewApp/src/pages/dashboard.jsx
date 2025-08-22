 
import { Outlet } from "react-router-dom"
import NavBar from "../components/myNav"

function Dashboard()
{

    return(
        <>
            <NavBar/>
            <h1>Dashboard Component</h1>
            <Outlet/>
            
        </>
    )
}
export default Dashboard 