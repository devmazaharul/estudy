"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import defaultVal from "@/utils/default";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export default function Navbar() {
  const path = usePathname();

  const name=Cookies.get("name")
  const token=Cookies.get("token")
  console.log(name)
  console.log(token)

  const sitename = defaultVal.site_name.split("-");
  return (
    <div className="flex print:hidden  px-6 py-2 items-center justify-between">
      {/* site_logo */}
      <div>
        <Link className="font-semibold flex items-center" href={"/"}>
          {sitename[0]}-<p className="text-blue-500">{sitename[1]}</p>
        </Link>
      </div>

      {/* Menu items */}

      <div className="flex items-center md:gap-6 gap-4 text-gray-700">
        <Link
          className={`${
            path == "/fees" ? "text-blue-500" : ""
          } hover:text-blue-500`}
          href={"/fees"}
        >
          Fees
        </Link>
        <Link
          className={`${
            path == "/result" ? "text-blue-500" : ""
          } hover:text-blue-500`}
          href={"/result"}
        >
          Result
        </Link>
        <Link
          className={`${
            path == "/rutine" ? "text-blue-500" : ""
          } hover:text-blue-500`}
          href={"/rutine"}
        >
          Rutine
        </Link>
        <Link
          className={`${
            path == "/exam" ? "text-blue-500" : ""
          } hover:text-blue-500`}
          href={"/exam"}
        >
          Exam
        </Link>
      </div>

      <div>
        {/* notification and account */}
        <div className="flex items-center gap-2 md:gap-8">
          <div>
            <button className="flex items-center">
              <MdOutlineNotificationsNone className="text-3xl  hover:text-blue-500  rounded-full" />{" "}
            </button>{" "}
          </div>
          <div className="hidden md:block">
            <Link
              href={"/sign_in"}
              className="border    py-1 hover:bg-gray-50 rounded-md flex items-center gap-1 px-3"
            >
              {" "}
              <IoMdLock />
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
