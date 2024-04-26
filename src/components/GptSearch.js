import React from "react";
import GptSerarchBar from "./GptSerarchBar";
import GptMovieSugetion from "./GptMovieSugetion";
import { BACKGROUNDIMAGE } from "../utils/constanat";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BACKGROUNDIMAGE} alt="backgroundimag" />
      </div>
      <GptSerarchBar />
      <GptMovieSugetion />
    </div>
  );
}

export default GptSearch;
