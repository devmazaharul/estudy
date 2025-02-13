"use client";
import axios from "axios";
import defaultVal from "@/utils/default";
import { useState } from "react";
import { site_info } from "@/utils/Info";
import Getresult from "./Getresult";

export default function ResultInput() {
  const inputObj = {
    year: 0,
    name: "",
    classname: 0,
    roll: 0
  
  };

  const [state, setstate] = useState({ ...inputObj });
  const [error, seterror] = useState("");
  const [result, setresult] = useState(null);

  const handleChange = (name, value) => {
    setstate({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, classname, roll, year } = state;
      if (name && classname && roll && year ) {
        if (roll.length == 5) {
       
            const res = await axios.post(
              defaultVal.site_url + "/results/" + roll,
              state
            );
            if (res.status == 200) {
              setresult(res.data?.data);
            }
          seterror("");
        } else {
          seterror("Roll must be 5 digit");
        }
      } else {
        seterror("All field are required");
      }
    } catch (error) {
      if (error.response) {
        // Server response পেলেও স্ট্যাটাস কোড 4xx বা 5xx হলে

        seterror(`Error: ${error.response?.data?.message}`);
      } else if (error.request) {
        // Request পাঠানো হয়েছে, কিন্তু কোনো response পাওয়া যায়নি
        seterror(error.request);
      } else {
        console.log(error)
        // অন্য কোনো সমস্যা (যেমন request সেটআপ করার সময়)
        seterror("Error Message:", error.message);
      }
    }
  };

  return (
    <>
      <div className="section">
        <div className="section_head print:hidden">
          <h1 className="section_head_title">Find your reuslt</h1>
          <p className="section_head_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            quis.
          </p>
        </div>
        <div className="md:w-1/4  mx-auto my-4">
          <form
            className={`${result != null ? "hidden" : "block"} `}
            onSubmit={handleSubmit}
          >
            <div className=" p-1  mb-1">
              <label className="text-gray-500">Examiner class</label>
              <div className="rounded-lg border py-2">
                <select
                  value={state.classname}
                  onChange={(e) => handleChange("classname", e.target.value)}
                  className=" outline-none  w-full bg-white"
                >
                  <option value="">Class</option>
                  {site_info.exams.map((exam) => (
                    <option key={Math.random()} value={exam.className}>
                      {exam.className}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className=" p-1 mb-1">
              <label className="text-gray-500">Exam type</label>
              <div className="rounded-lg border py-2">
                <select
                  value={state.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className=" outline-none  w-full bg-white"
                >
                  <option value={0}>Exam</option>
                  {state.classname !== 0 ? (
                    site_info.exams
                      .filter((exam) => {
                        if (exam.className == state.classname) {
                          return exam;
                        }
                      })
                      .map((val) => (
                        <option
                          key={Math.random()}
                          value={val.name.toLocaleLowerCase()}
                        >
                          {val.name.toUpperCase()}
                        </option>
                      ))
                  ) : (
                    <option key={Math.random()}>SS7</option>
                  )}
                </select>
              </div>
            </div>

            <div className=" p-1  mb-1">
              <label className="text-gray-500">Exam year</label>
              <div className="rounded-lg border py-2">
                <select
                  value={state.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                  className=" outline-none  w-full bg-white"
                >
                  <option value="">Year</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>
            </div>

            <div className=" p-1  mb-1">
              <label className="text-gray-500">Examiner Roll</label>
              <div className="rounded-lg border py-2">
                <input
                  value={state.roll}
                  onChange={(e) => handleChange("roll", e.target.value)}
                  type="number"
                  className="w-full px-2   rounded-lg outline-none "
                  placeholder="Roll"
                />
              </div>
            </div>

            <div className="my-2">
              <button className="main_btn">Search</button>
            </div>
            <p className="text-red-500">{error && error}</p>
          </form>
        </div>
        {/* get result section */}
        {result && <Getresult {...result} />}
      </div>
    </>
  );
}
