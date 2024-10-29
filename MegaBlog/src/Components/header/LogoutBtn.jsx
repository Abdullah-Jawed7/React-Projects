import React from "react" ;
import { useDispatch } from "react-redux";
import authService from "../../APPWRITE/Auth";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
    
    const dispatch = useDispatch()
    const handleLogout = () => {
        authService.logout()
        .then(()=>{
            dispatch(logout())}
        )
    }
    return(
        <>
        <button
        onClick={handleLogout}
         className="inline-block px-6 py-2 
        duration-200 hover:text-slate-400 hover:font-semibold text-lg text-slate-300 rounded-full hover:underline  hover:px-4 underline-offset-2 ">
            Logout
        </button>
        </>
    )
}

export default LogoutBtn;