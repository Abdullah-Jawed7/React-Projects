import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import service from "../APPWRITE/config";
import { Button, Container } from "../Components";
import  parse  from "html-react-parser";
import { useSelector } from "react-redux";
import '../App.css'

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);
  
  const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };
  let isAuthor = post && userData ? post.userId === userData.$id : false;
  

  return post ? (
    <div className="py-8 overflow-clip max-h-[150vh]">
      <Container>
        <div className="w-2/3 text-center mx-auto">
        <div
          className="w-[70%] mx-auto h-1/2  flex justify-center mb-4
             relative border rounded-xl md:p-2 post-pic"
           
        >
          <img
            src={service.filePreview(post.featuredimage)}
            alt={post.title}
            className="rounded-xl max-h-full"
          />

          {isAuthor && (
            <div className="absolute hidden md:block top-6 right-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button text={' Edit '}  bgColor="bg-[#0d2436]" color="text-slate-100" className="mr-3">
                 
                </Button>
              </Link>
              <Button text={'Delete'}  bgColor="bg-[#0d2436]" color="text-slate-100" onClick={deletePost}>
                
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-3 mb:mb-6">
          <h1 className="text-lg md:text-2xl font-bold ">{post.title}</h1>
        </div>
        <div className="browser-css">{parse(post.content)}</div>
        <div> {isAuthor && (
            <div className="mt-4 md:hidden block">
              <Link to={`/edit-post/${post.$id}`}>
                <Button text={'Edit'} bgColor="bg-[#0d2436]" color="text-slate-100" className="mr-3">
                 
                </Button>
              </Link>
              <Button className="" text={'Delete'} bgColor="bg-[#0d2436]" color="text-slate-100" onClick={deletePost}>
                
              </Button>
            </div>
          )}</div>
          </div>
      </Container>
    </div>
  ) : null;
}
