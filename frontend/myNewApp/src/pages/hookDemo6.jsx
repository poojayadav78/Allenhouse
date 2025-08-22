
import { createContext, useContext, useState } from "react"

// a) Create Context
const UserNameContext = createContext()


function HookDemo6()
{
    const [name, setName] = useState("Virat")
    return(


        <>
        <h3>Hook Demo6, Welcome {name}</h3>
        {/*b) Context Provider */}
        <UserNameContext.Provider value={{name, setName}}>
        <CompA />
        </UserNameContext.Provider>
        

        </>
    )
}

function CompA()
{
    return(
        <>
        <h3>Component A</h3>
        <CompB />
        </>
    )
}


function CompB()
{
    //c) Use Context
    const {name, setName} = useContext(UserNameContext)
    console.log(name);
    
    return(
        <>
        <h3>Component B, Welcome {name}</h3>
        <button onClick={()=>setName('Rahul')}>Change Name</button><br/>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </>
    )
}
export default HookDemo6


















