import React, { useRef } from "react"
import { MdUploadFile } from "react-icons/md"

const Upload = () =>{
      const inputRef= useRef(null);
    
      const inputClicked = () => {
        inputRef.current.click()
      }
    
      return (
        <div className='bg-white min-h-screen w-full flex items-center justify-center'>
            <div className="flex flex-col justify-between items-center border p-5 space-y-13">
               <h1 className="font-bold text-5xl">ChatPDF</h1>
               <input
                type="file"
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
      )
}

export default Upload