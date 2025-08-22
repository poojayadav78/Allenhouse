

import {Link, Outlet} from "react-router-dom"
import Navbar from "../../components/userNav"

function UserDashboard()
{


    return(
        <>
        
        <Navbar/>
        <h1>User Dashboard</h1>
        <Outlet/>



        </>
    )


}

export default UserDashboard