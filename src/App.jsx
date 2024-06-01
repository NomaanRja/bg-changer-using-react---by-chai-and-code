import { useState } from "react";

function App(){
const [ color , ucolor] = useState("olive")


return(

<div className=" w-full h-screen duration-200 " 
style={{backgroundColor:color}}>
<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={()=>ucolor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"red"}}>
            Red
        </button>
        <button onClick={()=>ucolor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"green"}}>
            Green
        </button>
        <button  onClick={()=>ucolor("blue")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"blue"}}>
            blue
        </button>
        <button onClick={()=>ucolor("orange")} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"orange"}}>
            orange
        </button>
        <button onClick={()=>ucolor("black")} 
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"black"}}>
            black
        </button>
    </div>
</div>
</div>



)

}

export default App