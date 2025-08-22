
import { createContext, useContext, useState } from "react"

// a) Create Context
const UserNameContext = createContext()


function HookDemo5()
{
    const [name, setName] = useState("Virat")
    return(


        <>
        <h3>Hook Demo5, Welcome {name}</h3>
        {/*b) Context Provider */}
        <UserNameContext.Provider value={name}>
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
    const name = useContext(UserNameContext)
    console.log(name);
    
    return(
        <>
        <h3>Component B, Welcome {name}</h3>
        </>
    )
}
export default HookDemo5






















//PROPERTY DRILLING

// import { useState } from "react"

// function HookDemo5()
// {
//     const [name, setName] = useState("Virat")
//     return(


//         <>
//         <h3>Hook Demo5, Welcome {name}</h3>
//         <CompA name={name}/>
//         </>
//     )
// }



// function CompA(props)
// {
//     return(
//         <>
//         <h3>Component A</h3>
//         <CompB name = {props.name}/>
//         </>
//     )
// }


// function CompB(props)
// {
//     return(


//         <>
//         <h3>Component B, Welcome {props.name}</h3>
//         </>
//     )
// }
// export default HookDemo5