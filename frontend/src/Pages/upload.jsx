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
      <div className={`h-[calc(100vh-6rem)] w-full flex items-center justify-center border-3 border-dashed border-primary px-8 transition-all duration-700`}>
          <div className='flex items-center justify-center rounded-2xl shadow-2xl'>
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
                  <MdUploadFile className="hidden sm:block"/> <p> Upload your Document</p>
               </div>
               )
               }
            </div>
         </div>
      </div>
      )
}

export default Upload