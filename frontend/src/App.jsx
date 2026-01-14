import Upload from "./Pages/upload"
import Chatbot from "./Pages/chatbot"
import Navbar from "./components/navbar"
import { AppProvider } from "./contextAPI/DocContext/AppProvider"
import { useContext, useState } from "react"
import { AppContext } from "./contextAPI/DocContext/AppContext"

const AppContent= ()=>{

  const { docName } = useContext(AppContext)

  return(
    <>
    <Navbar />
    <div className="flex flex-col md:flex-row">
      {docName
        ? 
        <Chatbot />
        :
        <Upload />
      }
     </div>
    </>
  )
}

const App= () =>{
  return(
        <AppProvider>
          <AppContent />
        </AppProvider>
  )

}

export default App
