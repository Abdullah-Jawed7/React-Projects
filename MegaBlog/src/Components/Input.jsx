import { useId } from "react";
import React  from "react";

// forwardRef use to handle your
//  component from parent componenet 
// and work dynamically
const Input = React.forwardRef(  // 1 way to make ref
    function Input ({
        label,
        type= 'text',
        text='',
        className ='',
        ...props},
        ref
    ){
        const id = useId();
        return(
            <div className={`w-full`}>
                {
                    label && <label 
                    className={`inline-block mb-1 pl-1`}

                    htmlFor={id}>
                        {label}</label>
                }
                <input type={type}
                placeholder={text}
                ref={ref}
                {...props}
                className={`px-3 py-2 rounded-lg bg-white
                text-black outline-none focus:bg-gray-200
                w-full ${className}`} />

            </div>
        )
    }
);
export default Input;