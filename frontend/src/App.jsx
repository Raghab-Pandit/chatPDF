import Upload from "./Pages/upload"
import Chatbot from "./Pages/chatbot"
import { useState } from "react"
import Navbar from "./components/navbar"

const App= () =>{
  const [docName, setDocName] = useState("")

  return(
    <>
       <Navbar />
    <div className="flex flex-col md:flex-row">
      <Upload setDocName={setDocName} docName={docName} />
      <Chatbot docName={docName}/>
     </div>
    </>
  )
}

export default App
