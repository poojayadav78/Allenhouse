
import { useContext } from "react";
import {Link, useNavigate} from "react-router-dom"
import { userContext } from "../context/globalContext";

function NavBar()
{

  const navigate = useNavigate();
  const{userName, logout} = useContext(userContext)
  const handleLogout = () =>{
    logout()
  };


return(
   <nav className="navbar bg-dark navbar-expand-md navbar-dark">
        <Link to="#" className="navbar-brand">
          <img src="/images/c++logo.png" width="50px" height="auto"/>
        </Link>

        <button className="navbar-toggler" data-toggle="collapse" data-target="#myDiv">
          <span className="navbar-toggler-icon"></span>

        </button>




        
        <div className="collapse navbar-collapse" id="myDiv">
          <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/dash/home">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/add">Add New</Link></li>
          
  


          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="">Demo</Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/dash/hook1">Hook Demo1</Link>
              
            </div>
            

          </li>



        </ul>


        <span class="navbar-text ml-auto">
          Welcome <b>{userName}</b><button onClick={handleLogout} className="btn btn-sm btn-warning">Logout</button>

        </span>
        </div>
        

       </nav>
      

)
}

export default NavBar