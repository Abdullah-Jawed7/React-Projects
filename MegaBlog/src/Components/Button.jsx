import React from "react";

function Button({
    text,
    type ='button',
    bgColor ='bg-transparent',
    borderColor='',
    color ='text-black',
    className ='',
    
    ...props
}) {
    return(
    <button
    className={`py-2 px-4 rounded-2xl border-2 text-sm md:text-lg 
        
        ${ borderColor }
        ${bgColor} ${color} ${className}`}
        {...props}
        type={type}
    >
        {text}
    </button>)
}

export default Button;