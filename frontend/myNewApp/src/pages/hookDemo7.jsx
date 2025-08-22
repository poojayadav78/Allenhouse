
import { createContext, useContext, useState } from "react"

// a) Create Context
const UserNameContext = createContext()

function DemoContextProvider({children})
{
    const [name, setName] = useState("Robin")
    return(
        <>
        <UserNameContext.Provider value={{name, setName}}>
        {children}
        </UserNameContext.Provider>
        </>
    )
}
function HookDemo7()
{
    return(
        <>
        <h3>Hook Demo, 7 </h3>
        <DemoContextProvider>
            <CompA/>
        </DemoContextProvider>
        
     
      
        

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
export default HookDemo7


















