import React, { useRef } from "react"
import { MdUploadFile } from "react-icons/md"

const Upload = () =>{
      const inputRef= useRef(null);
    
      const inputClicked = () => {
        inputRef.current.click()
      }
    
      return (
      <div className="h-[calc(100vh-6rem)] w-full flex items-center justify-center px-8">
          <div className='flex items-center justify-center bg-white rounded-2xl shadow-2xl py-5'>
            <div className="flex flex-col w-full justify-between items-center p-5 space-y-13">
               <h1 className="font-bold text-5xl">AskPDF</h1>
                       <input
                        type="file"
                        accept=".pdf, .docx"
                        ref={inputRef}
                        className="hidden"
                       />
               <div 
                className="w-full border-3 rounded-3xl flex items-center justify-center mt-5 p-10 font-semibold text-2xl space-x-2 cursor-pointer"
                onClick={inputClicked}
              >
                  <MdUploadFile /> <p> Upload your PDF Document</p>
               </div>
            </div>
         </div>
      </div>
      )
}

export default Upload