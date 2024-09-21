import React, { useState } from "react";
import {Logo ,Container ,LogoutBtn, ThemeBtn} from '../index'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
   const [open , setOpen] = useState(false)
    const authstatus = useSelector((state)=>state.auth.status)
    const navigate = useNavigate()
    const navItems = [
 {
    name:'Home',
    slug:'/',
    active: true
 },
 {
    name:'Login',
    slug:'/login',
    active: !authstatus
 },
 {
    name:'Signup',
    slug:'/signup',
    active: !authstatus
 },
 {
    name:'All Posts',
    slug:'/all-posts',
    active: authstatus
 },
 {
    name:'Add Posts',
    slug:'/add-posts',
    active: authstatus
 }
    ]
    return(<>
   
   <header className="py-3 shadow bg-[#0d2436]">
      <Container>
         <nav className="flex justify-between">
            <div className="mr-4">
               <Link to='/'>
               <Logo width="80px"/>
               </Link>
            </div>
            <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
            <ul className="hidden md:block md:flex ml-auto">
               {navItems.map((item)=> item.active ? (
                  <li className="text-slate-300" key={item.name}>
                     <button onClick={()=> navigate(item.slug)}
                     className="inline-block px-6 py-2 
        duration-200 hover:bg-blue-100 rounded-full "
                     >{item.name}</button>

               </li>):null)}
               {authstatus &&(
                  <>
                  <li>
                     <LogoutBtn/>
                  </li>
                  <li>
                     <ThemeBtn/>
                  </li>
                  </>
               )}
            </ul>
         </nav>
           {open && ( 
            <ul className="md:hidden  ml-auto">
               {navItems.map((item)=> item.active ? (
                  <li className="block text-slate-300 p-2 "
                   key={item.name}>
                     <button onClick={()=>( setOpen(!open), navigate(item.slug))}
                     className="inline-block px-6 py-2 
        duration-200 hover:bg-blue-100 rounded-full "
                     >{item.name}</button>

               </li>):null)}
               {authstatus &&(
                 <>
                 <li>
                    <LogoutBtn/>
                 </li>
                 <li>
                    <ThemeBtn/>
                 </li>
                 </>
               )}
            </ul>)}
      </Container>
   </header>
    </>)
}
export default Header;