import React, { useState } from 'react'



// image here 
import reg from '../assets/reg.png'

// miu 
import Button from '@mui/material/Button';

const Registration = () => {


    let [errorData, setErrordata] = useState({
        fullnameerror: "",
        emailerror: "",
        passworderror: ""
    })

    let [regData, setregData] = useState({
        fullname: "",
        email: "",
        password: ""
    })
 
    let handleChange = (e)=> {
        console.log(e.target.name,e.target.value)
        setregData({...regData,[e.target.name]:e.target.value})
        console.log(regData)
    }

    let handleSubmit = () => {
        if(regData.fullname == "") {
            setErrordata({...errorData,fullnameerror:"please give your name " })
        }
        if(regData.email == "") {
            setErrordata({...errorData,emailerror:"please give an email" })
        }
        if(regData.password == "") {
            setErrordata({...errorData,passworderror:"please give an password" })
        }
    }

  return (
    <div className='flex '>
        <div className='w-6/12 mt-[80px] ml-[90px]'>
            <div className='w-[490px] ml-[45px]'>
            <h2 className='text-[30px] font-bold font-sans'>Welcome To Let's Talk .</h2>
            <p className='text-[24px] font-bold  mt-[12px]'>Log In</p>

            <p className='text-[16px]  font-sans mt-[12px]'>Full Name </p>
            <input onChange={handleChange} name='fullname' type="text" placeholder='Name here ' className='font-sans text-[16px] placeholder:pl-[20px] border border-solid rounded-[5px] w-[490px] h-[35px] mt-[8px] border-gray-400'/>

            {
                errorData.fullnameerror &&  // jodi faka thake tahole jate error ta show na hoe but aamr akhane condition na dileo show hoe na 
                <p className='text-red-400'>{errorData.fullnameerror}</p>
            }

            <p className='text-[16px]  font-sans mt-[12px]'>Email</p>
            <input onChange={handleChange} name='email'  type="text" placeholder='Enter your mail' className='font-sans text-[16px] placeholder:pl-[20px] border border-solid rounded-[5px] w-[490px] h-[35px] mt-[8px] border-gray-400'/>
            {
                errorData.emailerror && 
                <p className='text-red-400'>{errorData.emailerror}</p>
            }

            <p className='text-[16px] font-sans mt-[20px]'>Password</p>
            <input onChange={handleChange} name='password' type="password" placeholder='password' className='font-sans text-[16px] placeholder:pl-[20px] border border-solid rounded-[5px] w-[490px] h-[35px] mt-[8px] border-gray-400 text:pl-[20px]'/>
            {/* <p className='text-red-400'>{errorData.passworderror}</p> */}

             {
                errorData.passworderror &&  
                <p className='text-red-400'>{errorData.passworderror}</p>
             } 


            <div className='flex  mr-20px mt-[6px]'>
                <div className='w-[22px] h-[22px] border border-solid border-gray-400 rounded-[5px]'></div>
                <p className='ml-[20px] text-[16px] -mt-[1px]  font-sans'>Remember Me </p>
                {/* <p className=' font-sans text-[16px] text-[#32375C]'> Forgot Password?</p> */}
            </div>


            <div className='mt-[22px]'>
            <button onClick={handleSubmit} type="button" class="text-white bg-[#32375C] w-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
            </div>
            <div className='flex'>
                <p className=' text-[16px] text-gray-400 font-sans '> Have an account ?</p>
                <p className=' font-sans text-[16px] text-[#32375C] ml-[8px]'>Sign Up </p>
            </div>
            </div>
        </div>
        <div className='w-6/12'>
            <img src={reg} alt="" className='w-full h-[100vh] block object-cover'/>
        </div>
    </div>
  )
}

export default Registration