"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram

} from "@fortawesome/free-brands-svg-icons";



const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Home() {
  const [value,setValue] = useState("");
  const [show,setShow ] = useState(false);
  return (
   <div className=' w-screen h-screen flex flex-col justify-start items-center '>
    <div className=' w-11/12 lg:w-10/12 xl:w-8/12 flex flex-col justify-center items-center'>
      <Image
      width={86}
      height={26}
      alt='logo'
      src={"/images/logo.svg"}
      className=' mt-10'/>
      <div className=' md:text-start text-center  mt-10'>
        <span className=' text-2xl md:text-4xl font-extralight text-custom-400'>We are launching</span> <span className=' text-2xl md:text-4xl  font-bold'> soon!</span>
      </div>
      <div className=' md:text-base text-sm mt-5'>
        Subscribe and get notified
      </div>
      <div className=' mt-10 w-full flex flex-row justify-between'>
        <div className=' flex w-full justify-start items-start flex-col md:flex-row'>
          <div className='w-full md:w-9/12 flex justify-center md:justify-end items-center md:items-end flex-col'>
            <input placeholder='Your email address...' type="text" value={value} onChange={(e)=>{setValue(e.currentTarget.value)}} className={!show ? "n" : "e"} />
            <div className={!show ? "u" : "s"}>Please provide a valid email address</div>
          </div>
          <div className=' w-full md:w-3/12 flex justify-center md:justify-normal md:mt-0 mt-5 '>
            <button onClick={()=>{value.match(valid) ? setShow(false) : setShow(true)}} 
            className=' bg-custom-100 w-11/12 md:w-auto ml-0 md:ml-2 text-white px-7 py-3  rounded-full'>
              Notify Me
            </button>
          </div>
        </div>
      </div>
      <div className=' w-11/12 md:w-6/12 mt-10'>
        <Image
        src={"/images/illustration-dashboard.png"}
        width={12800}
        height={10000}
        alt='image'
        className=' w-full'/>
      </div>
      <div className=' flex flex-col mt-5'>
        <div className=' flex flex-row justify-around items-center'>
          <div className=' text-sm text-custom-100 hover:text-white  border-gray-300 rounded-full border-2 w-7 flex justify-center items-center hover:border-custom-100 hover:bg-custom-100 cursor-pointer h-7'>
            <FontAwesomeIcon  icon={faFacebookF} />
          </div>
          <div className=' text-sm text-custom-100 hover:text-white  border-gray-300 rounded-full border-2 w-7 flex justify-center items-center hover:border-custom-100 hover:bg-custom-100 cursor-pointer h-7'>
            <FontAwesomeIcon  icon={faXTwitter} />
          </div>
          <div className=' text-sm text-custom-100 hover:text-white  border-gray-300 rounded-full border-2 w-7 flex justify-center items-center hover:border-custom-100 hover:bg-custom-100 cursor-pointer h-7'>
            <FontAwesomeIcon   icon={faInstagram} />
          </div>
        </div>
        <div className=' text-xs md:text-sm mt-5 text-custom-400'>
          © Copyright Ping. All rights reserved.
        </div>
      </div>

    </div>

   </div>)}