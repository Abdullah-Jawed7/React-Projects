import React ,{useContext} from "react";
import Usercontext from "../Context/UserContext";


function Profile() {
    const {user} =useContext(Usercontext)

    if (!user) return <div>Please login first </div>
    return <div>Welcome {user.username}</div>
        
   
}
export default Profile