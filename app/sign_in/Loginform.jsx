"use client"
import { FiPhone } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import { axios_instance } from "@/utils/Axios";
import { isValidBangladeshiPhone } from "@/utils/validation";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default  function Loginform() {

const [state, setstate] = useState({
    number:'',
    password:""
})

const [error, seterror] = useState("")

const router=useRouter()
const handlechange=(name,val)=>{
    setstate({
        ...state,
        [name]:val
    })
}

const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
       if(state.number&&state.password){
        seterror("")
        if(isValidBangladeshiPhone(state.number)){
            seterror("")
            const responce=await axios_instance.post("/admin/login",state,{
                withCredentials:true
            })
            if(responce.status==200){
               
                    router.push("/result")
                    Cookies.set("name","mazaharul")
                    router.refresh()
            }else{
                throw responce;
            }
        }else{
            seterror("Invalid bd phone number")
        }
       }else{
        seterror("Please required all fields")
       }
        
    } catch (error) {
    
        if (error.response) {
            // Server response পেলেও স্ট্যাটাস কোড 4xx বা 5xx হলে
            seterror(`Error: ${error.response?.data?.message || "Occourd please try again later"}`);
          } else if (error.request) {
            // Request পাঠানো হয়েছে, কিন্তু কোনো response পাওয়া যায়নি
            seterror(error.request || "Connection error");
          } else {
            
            // অন্য কোনো সমস্যা (যেমন request সেটআপ করার সময়)
            seterror("Error Message:", error.message || "somethig went wrong");
          }
    }
}



  return (
    <div className="md:w-[400px] py-4 w-[75%] mt-10 mx-auto">
      <div className="text-center py-3">
        <h1 className="text-xl pb-2  text-gray-700 font-semibold">
          E-study
        </h1>
        <p className="text-gray-400 text-sm">
        Admin Login - Access Your Secure Account with Credentials Safely.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input">
          <FiPhone className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="number"
            name="number"
            value={state.number}
            onChange={(e)=>handlechange("number",e.target.value)}
          
            placeholder="Phone number"
          />
        </div>
        <div className="input">
          <CiLock className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="password"
            name="password"
            value={state.password}
            onChange={(e)=>handlechange("password",e.target.value)}
            placeholder="Password"
          />
        </div>
        <div>
            {error && <p className="text-red-500">{error}</p>}
        </div>

    <button className="main_btn">Log in</button>

      </form>
{/* other section */}
      <div className="flex text-sm  py-3 px-1 text-blue-500 items-center justify-between">
    <Link href={'/forgot_password'}>Forgot password?</Link>
    <Link href={'/sign_up'}>Sign up</Link>

      </div>

    <p className="text-center py-3 text-gray-400">OR</p>

    <div className="w-full border text-center hover:bg-gray-100 px-4 py-2 rounded-lg">
        <Link className="w-full text-center  " href={'/teacher_login'}>Teacher Log in</Link>
    </div>

    </div>
  );
}
