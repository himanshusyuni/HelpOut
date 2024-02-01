function RequestCard({Name,College,Help,Commision,Deadline,Profile,Attachment,Description,Contact}){
    return(
        <>
        <div className="flex  w-full min-w-[760px]  rounded-lg mt-2 ml-10 justify-between border-2 border-black shadow-lg">
            <div className="flex mt-2 ml-2">
            <img src={Profile} alt="Profile" className="h-[100px] w-[100px]  rounded-full m-2 border-2 border-black " />
            <div className="font-bold m-2 font-Lora" >

                <p className=" text-red-900 text-[25px] text-nowrap">{Name}</p>
                <p className="mt-[-7px]  text-blue-800 text-sm">from {College}</p>
                <p className=" text-[25px] text-pretty">Needs {Help}</p>
            </div>
            </div>
            <div className="m-8 text-center text-red-600 font-bold">
                <p>DeadLine</p>
                <p >{Deadline}</p>
            </div>

            <div className="m-2 font-semibold">
                <p className="bg-blue-300 border-2  italic border-black rounded-md m-2 p-2">Commision : {Commision} rupees</p>
                <button className="active:bg-green-400 text-purple-800 italic border-2 border-green-600 bg-slate-100 p-2  mt-[1px] ml-[50px] rounded-lg ">View Details</button>
            </div>

        </div>
        </>
    )
}
export default RequestCard;