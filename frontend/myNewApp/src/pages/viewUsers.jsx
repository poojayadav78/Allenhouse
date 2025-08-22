import { useContext, useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { userContext } from "../context/globalContext";

function ViewUser()
{


    const {token, header} = useContext(userContext)

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(100)

    const [userData, setUserData] = useState([])

    const imgCss={width: "50px", height: "30px", borderRadius: "50%"}
    // useEffect(()=>
    // {
    // console.log("Hi from useEffect.......")
    // },[ count2 ])


    async function fetchAllData(){
        const res = await axios.get("http://localhost:8000/admin/showUser", header)
        setUserData(res.data);
    }

    async function deleteUser(uid)
    {
        if(confirm("Are you sure want to Delete..?"))
        {
        const res =await axios.delete(`http://localhost:8000/admin/deleteUser/${uid}`, header)
        alert(res.data.msg)
        fetchAllData()
        // console.log(uid);
        }
        
    }
    useEffect(()=>{
        fetchAllData()
        
    }, [])


    return(
        <>

            <h1>View All Users Component</h1>
            {count }
            <button onClick={()=>setCount(count+1)}>Button</button>

              {count2 }
            <button onClick={()=>setCount2(count2+1)}>Button</button>

            { userData.length > 0 && (
                <table className="table table-bordered table-striped w-75 mx-auto table-info">
                    <thead className="table-dark">
                            
                        <tr>
                            <th>Pic</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Password</th>
                            <th>Role</th>
                            <th>Active</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user)=>(
                            <tr>
                                <td><img style={imgCss} src={user.profilePic ? `http://localhost:8000/${user.profilePic}` :'/images/man.jpeg'}/></td>
                                <td>{user.userName}</td>
                                <td>{user.emailId}</td>
                                <td>{user.password}</td>
                                <td>{user.hasRole}</td>
                                <td className={user.isActive ? 'text-success': 'text-danger'}>{user.isActive ? 'Active' : 'Inactive'}</td>

                                <td><Link to={`/dash/edit/${user._id}` } className="btn btn-outline-info">Edit</Link></td>

                                <td>
                                    <button onClick={()=>deleteUser(user._id)} className="btn btn-outline-danger">Delete</button>
                                    </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) }


            
        </>
    )
}
export default ViewUser 