import OpenAI from "openai";
import { OPENAI_KAY } from "./constanat";

const openai = new OpenAI({
  apiKey: OPENAI_KAY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
