import React, { useRef } from "react"
import { MdUploadFile } from "react-icons/md"
import Upload from "./Pages/upload"
import Chatbot from "./Pages/chatbot"

const App= () =>{

  return(
     <div className="flex">
      <Upload />
      <Chatbot />
     </div>
  )
}

export default App
