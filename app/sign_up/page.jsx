import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Link from "next/link";
import { FiPhone, FiUser } from "react-icons/fi";
import { PiAddressBook } from "react-icons/pi";
import defaultVal from "@/utils/default";

export default function page() {
  return (
    <div className="md:w-[400px] py-4 w-[75%] mt-10 mx-auto">
      <div className="text-center py-3">
        <h1 className="text-xl pb-2  text-gray-700 font-semibold">
     {defaultVal.site_name}
        </h1>
        <p className="text-gray-400 text-sm">
        Create Your Account - Register Securely for Access and Exclusive Benefits.
        </p>
      </div>

      <form>
        <div className="input">
          <FiUser className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="text"
            name=""
            id=""
            placeholder="Name"
          />
        </div>
        <div className="input">
          <MdOutlineEmail className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
        </div>
        <div className="input">
          <PiAddressBook className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="text"
            name=""
            id=""
            placeholder="Address"
          />
        </div>
        <div className="input">
          <FiPhone className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="number"
            name=""
            id=""
            placeholder="Number"
          />
        </div>
        <div className="input">
          <CiLock className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
        </div>
        
        <div className="flex  gap-3 my-4">
         <input className="text-xl cursor-auto" type="checkbox" value={false}/>
         <p className="text-sm">I confirm that I have read, consent and agree to {defaultVal.site_name} <Link className="text-blue-500" href={'#'}>Term's of Use</Link> and <Link className="text-blue-500" href={'#'}>Privacy Policy</Link></p>
        </div>


    <button className="main_btn">Sign up</button>

      </form>
{/* other section */}
      <div className="flex text-sm py-3 px-1 text-blue-500 items-center justify-between">
      <Link href={'/forgot_password'}>Forgot password?</Link>
    <Link href={'/sign_in'}>Sign in</Link>

      </div>
    </div>
  );
}
