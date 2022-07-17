import React from "react";
import { useDispatch } from "react-redux";
import { MdOutlineRestartAlt } from "react-icons/md";
import { setKey } from "../../redux/typingSpeedSlice";

function Header() {
    const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-indigo-300 w-3/4 h-20 mt-5 rounded-xl flex justify-evenly items-center p-2">
        <select name="Lang" className="rounded-full h-10 px-5">
          <option value="tr">Türkçe</option>
          <option value="en">English</option>
        </select>

        <p className="text-white font-semibold lg:text-2xl">
          How fast are your fingers?
        </p>

        <button onClick={() => dispatch(setKey())}>
          <MdOutlineRestartAlt className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Header;
