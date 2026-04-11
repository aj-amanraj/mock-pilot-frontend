import React from 'react'
import axios from 'axios'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import {motion} from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import { serverUrl } from '../App';

const Auth = () => {

    const handleGoogleAuth = async()=>{
      try{
        const response = await signInWithPopup(auth, provider)
        let User = response.user
        let name = User.displayName
        let email = User.email
        const result = await axios.post(serverUrl + "/api/auth/google", {name, email}, {withCredentials:true})
        console.log(result.data)
      }catch(err){
        console.log(err)
      }
    }
  return (
    <div className='w-full min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 py-16 antialiased'>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className='w-full max-w-md bg-white rounded-3xl border border-gray-200 shadow-xl p-8 sm:p-10 flex flex-col items-center'
      >
        <div className='flex items-center justify-center gap-3 mb-8'>
          <div className='bg-[#18181b] text-white p-2.5 rounded-xl flex items-center justify-center shadow-md'>
            <BsRobot size={20} />
          </div>
          <h1 className='font-bold text-2xl sm:text-3xl tracking-tight text-gray-900'>
            MockPilot.ai
          </h1>
        </div>

        <div className='text-center mb-4'>
          <h2 className='text-2xl font-semibold leading-snug text-gray-800'>
            Continue with
            <span className='inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium text-sm sm:text-base ml-2 align-middle'>
              <IoSparkles size={16} className="text-green-600" />
              AI Mock Interview
            </span>
          </h2>
        </div>

        <p className='text-gray-500 text-center text-sm sm:text-base leading-relaxed mb-8 max-w-[95%]'>
          Thousands trust MockPilot.ai to land their dream jobs—start preparing today.
        </p>

        <motion.button onClick={handleGoogleAuth}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className=' w-full flex items-center justify-center gap-3 py-3.5 px-4 bg-[#18181b] text-white rounded-full border-none font-medium text-sm sm:text-base hover:bg-[#27272a] shadow-md transition-all duration-200 cursor-pointer'
        >
          <div className="bg-white p-0.5 rounded-full">
            <FcGoogle size={20} />
          </div>
          Continue with Google
        </motion.button>

      </motion.div>
    </div>
  )
}

export default Auth