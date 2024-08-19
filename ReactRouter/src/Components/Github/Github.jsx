import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";

export default function Github() {


    //   First Method for api caliing dynamically
  const { name } = useParams("");
 let userName = name ? `${name}`:`Abdullah-Jawed7`
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);


//   const data = useLoaderData() part of second method
  return (
    <>
      <div
        className="text-center
         m-4 bg-gray-600 text-3xl p-2 text-white"
      >
        <h1> Github Name: {data.login}</h1>
        <h1> Github Followers: {data.followers}</h1>
      </div>
      <img src={data.avatar_url} alt="Github img" width={300} height={300} />
    </>
  );
}


//  Second Method but not working dynamically
//  export async function GithubLoader(){
//     const {name} = useParams("");
//  let userName = name ? `${name}`:`Abdullah-Jawed7`;
//     const response = await fetch(`https://api.github.com/users/${userName}`)
//      return response.json()
// }
