
import React ,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import {Button ,Input , Logo,Logo2}from './index'
import { useDispatch } from "react-redux";

// here react form start
import { useForm } from "react-hook-form";
import authService from "../APPWRITE/Auth";


function Login() {
const navigate = useNavigate()
const dispatch = useDispatch()
const {register ,handleSubmit} = useForm()
const [error ,setError] = useState('')

const login = async (data)=>{
    setError('')
    try {
       let session = await authService.login(data)
       if (session){
       const userData = await authService.getCurrentUser()
        if(userData) dispatch(authLogin(userData));
        navigate('/')
        
       }

    } catch (error) {
        setError(error.message)
    }
}

return(
   <>
   <div className="flex items-center justify-center my-2 w-full">
    <div className="mx-auto w-full max-w-lg
   bg-gray-100 dark:bg-[#0d2436] rounded-xl p-10 border
      border-black/10">
        <div className="mb-2 flex justify-center mx-auto">
            
            <span className="inline-block  
            ">
                <Logo2 width="100%"/>
            </span>


        </div>
        <h2 className="text-center  dark:text-gray-50 text-2xl font-bold leading-tight
        ">Sign in to your account</h2>
        <p className="mt-2 text-center text-base
         text-black/60"
        >Dont have any account? &nbsp;
            <Link to='/signup' 
            className="font-medium text-primary
            transition-all duration-200 
            hover:underline "
            >Sign Up</Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>} 
     


    <form onSubmit={handleSubmit(login)}
    className="mt-8">
        <div className="space-y-5">
            <Input
            label='Email: '
            type='email'
            text='Enter Your Email '
            {...register('email',{
                required:true,
                validate:{
                    matchPatern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||"Email address must be a valid address",
                }
            })}
            />
            <Input
            label='Password: '
            type='password'
            text='Enter Your Password '
            {...register('password',{ required:true} )}
            />
            <Button type="submit" text={'Sign in'} className="w-full bg-primary text"></Button>
        </div>

    </form>
    </div>
    </div>
    </>
)
}
export default Login;