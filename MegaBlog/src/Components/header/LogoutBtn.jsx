import React from "react" ;
import { useDispatch } from "react-redux";
import authService from "../../APPWRITE/Auth";
import { logout } from "../../store/authSlice";
function LogoutBtn() {
    // 5:05
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
        duration-200 hover:bg-blue-100 text-slate-300 rounded-full">
            Logout
        </button>
        </>
    )
}

export default LogoutBtn;