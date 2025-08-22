import { useState } from "react"


function HookDemo1()
{
    console.log("Component Rendered...");
    

    // let count = 0
    // function btnClick()
    // {
    //     console.log(count);
    //     count ++;
        
    // }



    //  function HookDemo1()
    // {
    //     console.log(count);
    //     count ++;
        
    // }




    // ye state k 2 parameter hote h , 1 -> default value ya jis value se initialise karte hai  | 2 -> function hota h jiski help se hum log state ki value change kar skte h  
    // destructring
    const [count, setCount] = useState(0)

    return(
        <>
            <h1>Hook Demo Component</h1>
            <div align="center">
                Count : {count} <br/>
                <button onClick={()=>setCount(count+1) } className="btn btn-outline-primary">Button</button>
            </div>
            
        </>
    )
}
export default HookDemo1 