
import { useContext ,useState } from "react";
import axios from "axios";
import { userContext } from "../../context/globalContext";

function Add(){

     const {header} = useContext(userContext)
    console.log(header);
    

    const [data, setFormData]= useState({});
    const [msg, setMsg] = useState("");
    let [file, setFile] = useState(null)


    function fileHandler(event){
        setFile(event.target.files[0]); //store file
    }

    function inpHandler(e){
         

        setFormData({ ...data ,[e.target.name] : e.target.value })
       
        
    }

    async function formHandler(event)
    {
        event.preventDefault();

        const formData = new FormData();
        formData.append("taskName", data.taskName);
        formData.append("taskDesc", data.taskDesc);
        formData.append("date", data.date);
        formData.append("report", file);


        try{
            // console.log(formData)
        
        const res = await axios.post("http://localhost:8000/user/add", formData, header)
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
        <h1>Add new Task</h1>
         <div align="center">
                <form method="post" >
                    <table className="table table-bordered w-50 table-success text-center">
                        <tbody>
                            <tr>
                                <td>Task name</td><td><input type="text" name="taskName" onInput={inpHandler}/></td>
                            </tr>
                            <tr>
                                <td>Task Description</td><td><input type="text" name="taskDesc"  onInput={inpHandler}/></td>
                            </tr>
                            <tr>
                                <td>DeadLine</td><td><input type="date" name="date" onInput={inpHandler}/></td>
                            </tr>
                            
                            <tr>
                                <td>Task Report</td><td><input type="file" name="report" onChange={fileHandler} /></td>
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

export default Add



