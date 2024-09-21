import React,{useState ,useEffect} from "react";
import service from "../APPWRITE/config";
import { Container, PostCard } from "../Components";


export default function Home() {
    const [posts, setPosts] =useState([])
    useEffect(()=>{
        service.allPost().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    },[])
    if (posts.length == 0) {
        return(
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <h1 className="text-3xl font-bold text-gray-800">No posts yet</h1>
                </Container>
            </div>
        )
        
    }
    return( 
        <div className="w-full py-8">
            <Container >
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post)=>(
                    <div key={post.$id} className="p-2 ">
                        <PostCard {...post}
                        // $id={post.$id} title={post.title}  featuredimage={post.featuredimage}
                         />
                    </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}