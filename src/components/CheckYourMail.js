import React from 'react'
import mailImage from './illo.svg';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CheckYourMail = () => {
   const {emailRef}=useParams();
   const navigate=useNavigate();
   const takeMeBackToLogin=()=>{
       navigate('/');
   }
  return (
    <div className=' text-center w-1/3  mx-auto my-32'>
        <h1 className='text-2xl '>Check your email</h1>
        <div className='ml-[-28px]'>
            <img  src={mailImage} alt='check you email'/>
        </div>
        <p className='mb-3'>Check your <span className='font-bold'>{emailRef.substring(1)}</span> inbox for instructions from us on how to reset your password.</p>
        <p onClick={takeMeBackToLogin} className='underline text-[#014847] cursor-pointer hover:no-underline'>Go back to login screen</p>
    </div>
  )
}

export default CheckYourMail