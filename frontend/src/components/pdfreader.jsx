import { useContext } from "react"
import { AppContext } from "../contextAPI/DocContext/AppContext"

const ReaderPDF= () => {
    const { Doc } = useContext(AppContext)

    const fileURL= URL.createObjectURL(Doc)

    return(
        <div className="w-full hidden sm:block">
            <object data={fileURL} type="application/pdf" className="w-full h-full"/>
        </div>
    )
}

export default ReaderPDF