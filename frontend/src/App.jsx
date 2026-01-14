import Upload from "./Pages/upload"
import Chatbot from "./Pages/chatbot"
import Navbar from "./components/navbar"
import { AppProvider } from "./contextAPI/DocContext/AppProvider"
import { useContext, useState } from "react"
import { AppContext } from "./contextAPI/DocContext/AppContext"
import Footer from "./components/footer"
import ReaderPDF from "./components/pdfreader"

const AppContent= ()=>{

  const { docName } = useContext(AppContext)

  return(
    <>
    <div className="min-h-screen">
    <Navbar />
      {docName
        ? 
        <div className="flex h-full">
        <ReaderPDF />
        <Chatbot />
        </div>
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
