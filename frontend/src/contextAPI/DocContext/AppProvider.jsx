import { useRef, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({children}) => {
  const [docName, setDocName] = useState(false)
  const [docDelete, setDocDelete] = useState(false);
  const [Doc, setDoc] = useState(null)

      const inputRef= useRef(null);
      const handleDocDelete = () =>{
         setDoc("");
         setDocName("")

      if(inputRef.current){
        inputRef.current.value= null
      }

      setDocDelete(false);
      console.log("Doc Deleted")
      }

  return (
    <AppContext.Provider value={{ docDelete, setDocDelete, docName, setDocName, Doc, setDoc, inputRef, handleDocDelete}}>
        {children}
    </AppContext.Provider>
  )
}