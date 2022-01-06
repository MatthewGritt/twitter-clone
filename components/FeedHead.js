import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  NewspaperIcon,
  PhotographIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

function FeedHead() {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parent =
      e.target.parentElement.parentElement.parentElement.childNodes[0];
    if (parent.innerText === "") {
      alert("please insert text");
      return;
    }
    await addDoc(collection(db, "posts"), {
      text,
      timestamp: serverTimestamp(),
    });
    parent.innerText = "";
  };

  return (
    <div className="pt-[10px] px-[14px] sm:px-0 sm:mt-[2px]  w-full relative">
      <div className=" sm:px-[15px] ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center ">
            <img
              className=" ml-[2px] mr-6 sm:absolute top-[57px] h-[33px] left-3 sm:h-[52px] "
              src="/images/user-pic.webp"
              alt=""
            />
            <h2 className="font-semibold text-[17px] sm:text-xl sm:ml-[1px]">
              Home
            </h2>
          </div>
          <SparklesIcon className="h-5 sm:mr-[1px] " />
        </div>
        <form className=" cursor-text hidden sm:flex mt-9 ml-[63px] flex-col flex-1 ">
          <div
            id="test"
            contentEditable={true}
            data-placeholder="What's happening?"
            className="test flex-1 max-w-[337px] md:max-w-[420px]  text-[20px] leading-6 break-words outline-none"
            onKeyUp={(e) => setText(e.target.innerText)}
          ></div>
          <div className="flex items-center -ml-[7px] justify-between pt-[29px] pb-3">
            <div className="text-[#1DA1F2] flex items-center">
              <PhotographIcon className="h-[34px] hover:bg-blue-100 rounded-full p-[6px] cursor-pointer" />
              <NewspaperIcon className="h-[34px] hover:bg-blue-100 rounded-full p-[6px] cursor-pointer ml-[2px]" />
              <ChartBarIcon className="hidden  md:inline-flex h-[34px] hover:bg-blue-100 rounded-full p-[6px] cursor-pointer ml-[2px]" />
              <EmojiHappyIcon className="h-[34px] hover:bg-blue-100 rounded-full p-[6px] cursor-pointer ml-[2px]" />
              <CalendarIcon className="hidden md:inline-flex h-[34px] hover:bg-blue-100 rounded-full p-[6px] cursor-pointer ml-[2px]" />
              <LocationMarkerIcon className="h-[20px]  ml-[10px] opacity-50" />
            </div>
            <div>
              <button
                onClick={(e) => handleSubmit(e)}
                className="bg-[#1DA1F2] font-bold text-[15px] text-white rounded-[999px] w-[76px] py-[7px] mr-1"
              >
                Tweet
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FeedHead;
