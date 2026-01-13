import Upload from "./Pages/upload"
import Chatbot from "./Pages/chatbot"
import { useState } from "react"

const App= () =>{
  const [docName, setDocName] = useState("")

  return(
     <div className="flex flex-col md:flex-row">
      <Upload setDocName={setDocName} docName={docName} />
      <Chatbot docName={docName}/>
     </div>
  )
}

export default App
