import React, { useContext, useEffect, useRef, useState } from "react"
import { MdUploadFile } from "react-icons/md"
import { FaFilePdf } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AppContext } from "../contextAPI/DocContext/AppContext";


const Upload = () =>{

   const { setDocName, Doc, setDoc, inputRef } = useContext(AppContext)


      const handleDocChange = (event) => {
         const file = event.target.files[0];
         if(file){
            setDoc(file)
            setDocName(file.name)
         }
      }
    
      const inputClicked = () => {
        inputRef.current.click()
      }
    
      return (
      <div className={`h-full w-full flex flex-col items-center justify-center transition-all mt-20 duration-700 space-y-10`}>
         <div className="text-center space-y-3">
            <h1 className="text-5xl font-black">Interact with your Document</h1>
            <p className="text-xl text-gray-400/60">Unlock insights from your PDFs with AI-powered analysis.</p>
         </div> 
          <div className='flex items-center justify-center p-0 sm:p-20 border-3 border-dashed border-primary rounded-2xl shadow-2xl'>
            <div className="flex flex-col w-full h-full justify-between items-center">
               {/* <h1 className="font-bold text-3xl sm:text-5xl">AskPDF</h1> */}
                       <input
                        type="file"
                        accept=".pdf, .docx"
                        ref={inputRef}
                        onChange={handleDocChange}
                        className="hidden"
                       />
               {Doc ? 
               (
               <div 
                className="w-full group border-3 border-dotted border-primary rounded-3xl flex items-center justify-center p-2 sm:p-10 font-semibold text-[20px] sm:text-2xl space-x-2 cursor-pointer"
              >
                  <FaFilePdf /> <p>{Doc.name}</p> 
               </div>
               ) 
               : 
               (
               <div 
                className="w-full h-full border-3 border-dotted border-primary rounded-3xl flex items-center justify-center p-2 sm:p-10 font-semibold text-[20px] sm:text-2xl space-x-2 cursor-pointer"
                onClick={inputClicked}
              >
                  <MdUploadFile className="hidden sm:block"/> <p> {"Upload your Document"} <br/> {"(Prefferably a .pdf file)"}</p>
               </div>
               )
               }
            </div>
         </div>
      </div>
      )
}

export default Upload