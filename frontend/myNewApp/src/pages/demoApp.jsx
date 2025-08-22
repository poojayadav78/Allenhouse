import { useRef } from "react"
import { useState } from "react";

function DemoApp() 
{

    const inpRef = useRef(null)
    const formRef = useRef(null)
    const [tasks, setTasks] = useState([{}])
    function formHandler(e)
    {
        e.preventDefault()
        setTasks([...tasks, {[formRef.current.txt1.name]: formRef.current.txt1.value,  [formRef.current.txtArea.name]: formRef.current.txtArea.value}])
        console.log(tasks);
        


        // console.log(formRef.current);
        // console.log(formRef.current.txt1);
        // console.log(formRef.current.txt1.value);
        // console.log(formRef.current.txtArea);
        // console.log(formRef.current.txtArea.value);
        
        // console.log(inpRef.current);
        // console.log(inpRef.current.value);
        // inpRef.current.style.border = "2px solid red"
        
    }
    return(
        <>
            <h1>Demo App</h1>
            <form method="post" onSubmit={formHandler} ref={formRef}>
                <table>
                    <tbody>
                        <tr><td><input type='text' name='txt1' /></td></tr>
                        <tr><td><textarea name="txtArea" ref={inpRef}></textarea></td></tr>
                        <tr><td><button type="submit">Button</button></td></tr>
                    </tbody>
                </table>
            </form>


        </>
    )
}

export default DemoApp
//context login