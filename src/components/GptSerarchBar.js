import React, { useRef } from "react";
import lang from "../utils/LanguageConstanat";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

function GptSerarchBar() {
  const serchText = useRef(null);
  const langkey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(serchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      serchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResult.choices);
  };
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-10 bg-gray-900"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={serchText}
          type="text"
          className="p-2 m-2 col-span-8 rounded-es-xl"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className=" col-span-2 rounded-e-full m-2 py-2 px-2 bg-red-600 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
}

export default GptSerarchBar;
