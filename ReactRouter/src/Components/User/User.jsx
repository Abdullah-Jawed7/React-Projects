import React from "react";
import { useParams } from "react-router-dom";
export default function User (){
    const {id} = useParams("")
    return (
        <>
        <div className="bg-blue-500
         text-white-200
         text-center text-3xl p-4">User: {id}</div>
        </>
    )
}