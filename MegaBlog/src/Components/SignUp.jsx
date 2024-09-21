import React, { useState } from "react";
import authService from "../APPWRITE/Auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo, Logo2 } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const SignUp = async (data) => {
    setError("");
    try {
      const userData = authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="mx-auto w-full rounded-xl p-10 border
           bg-gray-100 max-w-lg border-black/10"
      >
        <div className="mb-2 flex justify-center">
          <span
            className="inline-block w-full 
            max-w-[100px]"
          >
            <Logo2 width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight
        ">Sign in to your account</h2>
        <p className="mt-2 text-center text-base
         text-black/60"
        >Already have an account? &nbsp;
            <Link to='/login' 
            className="font-medium text-primary
            transition-all duration-200 
            hover:underline "
            >Login</Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>} 
       <form onSubmit={handleSubmit(SignUp)}>
        <div className="space-y-5">
         <Input
         label="Full Name: "
         text="Enter Your Full Name"
         {...register('name',{required:true})}

         />
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
            <Button type="submit" text={'Create Account'} className='w-full'>
                </Button>
        </div>
       </form>


      </div>
    </div>
  );
}
export default SignUp;
