import React from "react"

const Chatbot= () =>{
    //bg-black/30 blur-[5px]

    return(
    <>
        <div className='w-full h-[calc(100vh-6rem)] shadow-2xl bg-white flex flex-col justify-between items-center rounded-xl p-3 relative'>
            <h1 className="font-bold text-1xl">AskPDF</h1>
            <div className="h-full px-5 py-3"></div>
            <div className="w-[50%] border-3 rounded-3xl h-20 p-3">
                <input
                 type="text"
                 placeholder="Ask anything about your Document"
                 className="border-none outline-none w-full h-full"
                 />
            </div>
        </div>
    </>
    )
}

export default Chatbot