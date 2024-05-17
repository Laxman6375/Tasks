import React from "react";
import hero from "../assets/5353146.jpg";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className=" w-full h-full  flex flex-col lg:flex-row justify-center items-center gap-5 py-5 lg:py-0">
      <div className=" w-[90%] lg:w-[40%] h-[50%] bg-[#3C5B6F] rounded-lg flex justify-center items-center flex-col gap-5">
        <div
          onClick={() => redirectTo("https://discord.com/invite/VBcYuHhqzj")}
          className=" bg-[#948979] flex gap-5 justify-center items-center w-[80%] lg:w-[40%] py-2 px-4 rounded-lg cursor-pointer"
        >
          <FaDiscord size={40} />
          <p>Discord</p>
        </div>
        <div
          onClick={() =>
            redirectTo("https://chat.whatsapp.com/CIG1F249G2a30OooPEkpC0")
          }
          className=" bg-[#948979] flex gap-5 justify-center items-center w-[80%] lg:w-[40%] py-2 px-4 rounded-lg cursor-pointer"
        >
          <FaWhatsapp size={40} />
          <p>Whatsapp</p>
        </div>
        <div
          onClick={() => redirectTo("https://github.com/thepwnexperts")}
          className=" bg-[#948979] flex gap-5 justify-center items-center w-[80%] lg:w-[40%] py-2 px-4 rounded-lg cursor-pointer"
        >
          <FaGithub size={40} />
          <p>GitHub</p>
        </div>
      </div>
      <img
        src={hero}
        alt="hero"
        className=" w-[90%] lg:w-[40%] h-[30%] lg:h-[50%] rounded-lg"
      />
    </div>
  );
};

export default Home;
