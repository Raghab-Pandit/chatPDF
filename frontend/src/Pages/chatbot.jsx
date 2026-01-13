import React, { useEffect, useMemo, useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

const Chatbot= ({ docName }) =>{

    const [Expand, setExpand] = useState(false)
    //bg-black/30 blur-[5px]
    
    useEffect(()=>{
        setExpand(!!docName);
    }, [docName])

    return(
    <div className={`${Expand ? "opacity-100" : "opacity-0 md:flex hidden"} flex flex-col justify-center w-full border-2 border-primary rounded-xl transition-all duration-300`}>
           <div className={`w-full bg-blue-600 h-[calc(10vh-0.6rem)] rounded-t-xl px-3 flex items-center justify-between`}>
                <h1 className="font-bold text-[15px] sm:text-2xl text-white">{docName ? docName : "AskPDF"}</h1>
                {/* <RiArrowDropDownLine className={`${Expand ? "rotate-180" : "rotate-0"} transition-all duration-300 font-bold text-3xl text-white cursor-pointer`} onClick={()=> setExpand(prev => !prev)} /> */}
            </div> 
        <div className={`w-full h-[calc(90vh-5.55rem)] transition-all py-3 duration-300 shadow-2xl flex flex-col justify-between items-center rounded-b-xl relative`}>
            <div className={`h-full w-full px-5 py-3`}></div>
            <div className={`transition-all duration-300 w-[80%] sm:w-[50%] border-[3px] rounded-3xl h-20 p-3`}>
                <input
                 type="text"
                 placeholder="Ask about the Document"
                 className="border-none outline-none w-full h-full"
                 />
            </div>
        </div>
    </div>
    )
}

export default Chatbot