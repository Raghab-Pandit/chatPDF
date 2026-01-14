import React, { useContext, useEffect, useMemo, useState } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AppContext } from "../contextAPI/DocContext/AppContext";

const Chatbot= () =>{

    const { docDelete, handleDocDelete, docName, setDocDelete } = useContext(AppContext)

    const [Expand, setExpand] = useState(false)
    //bg-black/30 blur-[5px]

          useEffect(()=>{
         if(docDelete){
            handleDocDelete()
      }}, [docDelete])
    
    useEffect(()=>{
        setExpand(!!docName);
    }, [docName])

    return(
    <div className={`${Expand ? "opacity-100" : "opacity-0 md:flex hidden"} flex flex-col justify-center w-full rounded-b-xl transition-all duration-300 border-l border-gray-300/30`}>
           <div className={`w-full border-b border-gray-300/30 h-[calc(10vh-0.6rem)] px-3 flex items-center justify-between`}>
                <h1 className="font-bold text-[15px] sm:text-2xl text-white">{docName ? docName : "AskPDF"}</h1>
                <button
                  className="cursor-pointer text-red-500 border-none outline-none text-2xl"
                  onClick={()=> {setDocDelete(true)}}
                  >
                     <IoIosCloseCircleOutline />
                </button>
                {/* <RiArrowDropDownLine className={`${Expand ? "rotate-180" : "rotate-0"} transition-all duration-300 font-bold text-3xl text-white cursor-pointer`} onClick={()=> setExpand(prev => !prev)} /> */}
            </div> 
        <div className={`w-full h-[calc(90vh-6rem)] transition-all py-3 duration-300 shadow-2xl flex flex-col justify-between items-center rounded-b-xl relative`}>
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