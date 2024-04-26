import React from "react";
import lang from "../utils/LanguageConstanat";
import { useSelector } from "react-redux";

function GptSerarchBar() {
  const langkey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 grid grid-cols-10 bg-gray-800">
        <input
          type="text"
          className="p-3 m-3 col-span-8 rounded-es-xl"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className=" col-span-2 rounded-e-full m-4 py-2 px-2 bg-red-600 text-white">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSerarchBar;
