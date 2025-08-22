// function AddUser()
// {

//     return(
//         <>

//             <h1>Add new User Component</h1>
            
//         </>
//     )
// }
// export default AddUser 





import { useContext ,useState } from "react";
import axios from "axios";
import { userContext } from "../context/globalContext";

// function AddUser(){
//     const {header} = useContext(userContext);
//     console.log(header);
    
// }

function HookDemo2()
{
    const {header} = useContext(userContext)
    console.log(header);
    

    const [data, setFormData]= useState({});
    const [msg, setMsg] = useState("");
    let [file, setFile] = useState(null)


    function fileHandler(event){
        setFile(event.target.files[0]); //store file
    }

    function inpHandler(e){
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.name);
        // console.log(e.target.value); 

        setFormData({ ...data ,[e.target.name] : e.target.value })
        // console.log(formData);
        
    }

    async function formHandler(event)
    {
        event.preventDefault();

        const formData = new FormData();
        formData.append("unm", data.unm);
        formData.append("pwd", data.pwd);
        formData.append("mailId", data.mailId);
        formData.append("profilePic", file);


        try{
            // console.log(formData)
        
        const res = await axios.post("http://localhost:8000/admin/addUser", formData, header)
        //console.log(res);

        setMsg(res.data.msg)
        event.target.reset() //to clear input controls
    }
    catch (err){
        console.log(err);
        
    }
        
    }
    
    

    return(
        <>
            <h1>Add New User</h1>
            <div align="center">
                <form method="post" onSubmit={formHandler}>
                    <table className="table table-bordered w-50 table-dark text-center">
                        <tbody>
                            <tr>
                                <td>User Name</td><td><input type="text" name="unm" onInput={inpHandler}/></td>
                            </tr>
                            <tr>
                                <td>Password</td><td><input type="password" name="pwd" onInput={inpHandler}/></td>
                            </tr>
                             <tr>
                                <td>Email</td><td><input type="email" name="mailId" onInput={inpHandler}/></td>
                            </tr>
                            <tr>
                                <td>Profile Picture</td><td><input type="file" name="profilePic" onChange={fileHandler}/></td>
                            </tr>
                            <tr>
                                <td colspan='2'><input type="submit" name="subBtn"/></td>
                            </tr>
                        </tbody>

                    </table>


                </form>

                {msg && (
                
                <p className="alert alert-success w-50 mx-auto">
                    {msg}
                </p>
                
                )}
                
            </div>
            
        </>
    )
}
export default HookDemo2 