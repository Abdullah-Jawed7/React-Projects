import React from "react";
import service from '../APPWRITE/config'
import { Link } from "react-router-dom";



export default function PostCard ({  $id,title,featuredimage}){
   return(
    <Link to={`/post/${$id}`} >
        <div className="w-full relative h-72  rounded-xl p-4">
            <div className="w-full overflow-clip h-full justify-center border-2 border-solid border-[#0d2436] rounded-xl mb-4">

                <img src={ service.filePreview(featuredimage)} alt="" className="h-full w-full rounded-xl"/>
                              
                                  
            </div>
            <h2
            className=" absolute bottom-6 text-lg text-[#c0e5f1] w-7/12 md:text-lg font-bold">
                {title}
            </h2>
        </div>
    </Link>
   )
}