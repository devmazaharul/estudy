import React from "react";
import { MdOutlineEmail } from "react-icons/md";

export default function page() {
  return (
    <div className="md:w-[400px] py-4 w-[75%] mt-10 mx-auto">
      <div className=" py-3 text-center">
        <h1 className="text-xl pb-2  text-gray-700 font-semibold">
          E-study
        </h1>
        <p className="text-gray-400 text-sm">
        Reset Your Password Securely - Update Your Account Credentials to Regain Safe and Easy Access.
        </p>
      </div>

      <form>
        <div className="input">
          <MdOutlineEmail className="text-gray-400 text-xl" />
          <input
            className="w-full outline-none"
            type="email"
            name=""
            id=""
            placeholder="Email address"
          />
        </div>
    

    <button className="main_btn">Reset</button>

      </form>

    </div>
  );
}
