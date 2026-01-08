import React, { useRef, useState } from "react"
import { MdUploadFile } from "react-icons/md"
import { FaFilePdf } from "react-icons/fa"
import { IoIosCloseCircleOutline } from "react-icons/io";


const Upload = () =>{
   
   const [Doc, setDoc] = useState(null)

      const inputRef= useRef(null);

      const handleDocChange = (event) => {
         const file = event.target.files[0];
         if(file){
            setDoc(file)
         }
      }

      const handleDocDelete = () =>{
         setDoc("");

      if(inputRef.current){
        inputRef.current.value= null
      }
      }
    
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
                        onChange={handleDocChange}
                        className="hidden"
                       />
               {Doc ? 
               (
               <div 
                className="w-full group border-3 rounded-3xl flex items-center justify-center mt-5 p-10 font-semibold text-2xl space-x-2 cursor-pointer"
              >
                  <FaFilePdf /> <p>{Doc.name}</p> 
                  <button
                  className="md:invisible md:group-hover:visible cursor-pointer text-red-500 border-none outline-none"
                  onClick={handleDocDelete}
                  >
                     <IoIosCloseCircleOutline />
                     </button>
               </div>
               ) 
               : 
               (
               <div 
                className="w-full border-3 rounded-3xl flex items-center justify-center mt-5 p-10 font-semibold text-2xl space-x-2 cursor-pointer"
                onClick={inputClicked}
              >
                  <MdUploadFile /> <p> Upload your Document</p>
               </div>
               )
               }
            </div>
         </div>
      </div>
      )
}

export default Upload