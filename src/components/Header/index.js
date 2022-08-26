import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineRestartAlt } from "react-icons/md";
import { setReplay } from "../../redux/typingSpeedSlice";
import  LangSelect  from "../LangSelect";

function Header() {
    const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-indigo-300 w-3/4 h-20 mt-5 rounded-xl flex justify-evenly items-center p-2">
            
            <LangSelect />

        <p className="text-white font-semibold lg:text-2xl">
          How fast are your fingers?
        </p>

        <button onClick={() => dispatch(setReplay())}>
          <MdOutlineRestartAlt className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
