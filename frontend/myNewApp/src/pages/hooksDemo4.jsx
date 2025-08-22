function HookDemo4(){

    return(
        <>
        
        <h1>Hook Demo 4</h1>
        <CompA name ="Virat" age='25'/>
        <CompA userData={{email: 'demo12@gmail.com', gender: 'Male'}}/>
        </>

    )
}

function CompA(props){
    console.log(props);
    
    return(


        <>
            <h3>Comp A</h3>
            <p>
               
            </p>
            
        </>
    )
}
export default HookDemo4