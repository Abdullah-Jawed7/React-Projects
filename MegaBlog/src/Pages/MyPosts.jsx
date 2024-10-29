import service from "../APPWRITE/config";
import React, { useState, useEffect } from "react";
import { Container, PostCard ,Button } from "../Components";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

export default function MyPosts() {
    const userData = useSelector((state) =>state.auth.userData)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
      service.allPost([]).then((posts) => {
        if (posts) {
          setPosts(posts.documents);
        }
      })
}, []);
let navigate =useNavigate()

let myPosts = posts.filter((post)=>post.userId === userData.$id)
if (myPosts.length===0) {
  return (
       <div className="w-full py-8">
       <Container>
        <div className="grid justify-items-center">
       <h1 className="text-3xl font-bold text-gray-800">No posts yet</h1>
       <p>Click to Post Now
      <button onClick={()=> navigate('/add-posts')} className="bg-transparent text-[#0d2436] py-2 px-4 m-4 rounded-2xl border-2 text-sm md:text-lg ">Post Now</button></p>
      </div>  </Container>
     </div>)

} else {
  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {
           myPosts.map((post) => (
            <div key={post.$id} className="p-2">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

 
}