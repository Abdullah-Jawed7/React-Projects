import React,{useCallback , useEffect} from "react";
import  {useForm} from 'react-hook-form';
import {Button , Input ,RTE ,SelectBtn}from '../index'
import service from "../../APPWRITE/config"
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

export default function PostForm({post}) {
    console.log(post);
    
    const navigate =useNavigate()
    const userData = useSelector((state) => state.auth.userData)
 const {register ,handleSubmit ,watch ,setValue ,control,getValues}=useForm({
    defaultValues:{
        title:post?.title || '',
        slug:post?.$id || '',
        content:post?.content || '',
        status:post?.status || 'active',
    }
})
 const submit = async (data) => {
  if (post) {
  const file = data.image[0]? service.uploadFile(data.image[0]) : null   
  if (file) {
  service.deleteFile(post.featuredImage)    
  } 
  const dbPost = await service.updatePost(post.$id,
    {...data,
        featuredImage:file ? file.$id: undefined,
    }
) ;
if (dbPost) {
    navigate(`/post/${dbPost.$id}`)
}
  }  else{
    const file = await service.uploadFile(data.image[0]);
    console.log(file.$id);
    
    if (file) {
        const fileId = file.$id;
        data.featuredimage= fileId;
        console.log(data.featuredimage);
        
    const dbPost = await service.createPost({  ...data, userId : userData.$id});
    console.log(dbPost);
    
    if (dbPost) {
        console.log(dbPost.$id);
        
        navigate(`/post/${dbPost.$id}`)
    }
    }
   
  }
 }
 const slugTransform = useCallback((value)=>{
    if (value && typeof value === 'string') return value
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z\d\s]+/g, "-")
    .replace(/\s/g, "-");
    return ''
    
 },[])
 useEffect(()=>{
    const subscription = watch((value , {name})=>{
        if (name === 'title') {
         setValue('slug',slugTransform(value.title
            ,{shouldValidate:true}))            
        }
    })
    return () => {
        subscription.unsubscribe()
    }
 },[watch,slugTransform,setValue])
    return(
    <form onSubmit={handleSubmit(submit)}
     className="flex flex-wrap">
        <div className="px-2 w-3/3 md:w-2/3">
        <Input 
        label= 'Title :'
        text ='Title'
        className='mb-4'
        {...register("title",{required:true})}
        />
        <Input 
        label= 'Slug :'
        text ='Slug'
        className='mb-4'
        {...register("slug",{required:true})}
        onInput={(e)=>{setValue("slug" , 
            slugTransform(e.currentTarget.value),
            {shouldValidate:true});}}
        />
        <RTE
        label='Content :'
        name='content'
        control={control}
        defaultValue={getValues('content')}
        />
        </div>
        <div className="w-3/3 md:w-1/3 px-2">
        <Input
        label='Featured Image :'
        type='file'
        className="mb-4"
        accept="image/png,image/jpg,image/jpeg,image/gif"
        {...register("image",{required:!post})}
        />
        {post && (
            <div className="w-full mb-4">
                <img src={service.filePreview(post.featuredimage)
                } alt={post.title}
                className="rounded-lg" />
            </div>
        )}
        <SelectBtn
        options={['active','inactive']}
        label='Status'
        className='mb-4'
        {...register("status",{required:true})}
        />
        <Button
        text={post? 'Update':'Submit'}
        type="submit"
        bgColor="bg-[#0d2436]" color="text-slate-100"
        className={`w-full ${post?'': undefined} `}
        ></Button>
        </div>
     </form>
    )    
}