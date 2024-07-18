import React from "react";
// import WorkIMG from '../assets/workImg.jpg'
import Green from "../assets/green.jpg";
import Lucid from "../assets/lucidProfile.jpg";
import Robo from "../assets/robo.jpg";
// import Rover from '../assets/rover.jpg'
import { Route, Routes } from "react-router-dom";
import AuxVerse from "../assets/AuxVerse.png";
import HW1 from "../assets/HW1.png";
import agar from "../assets/agar.png";
import duneCloud from "../assets/ai-gallery/dune-cloud.gif";
import Coin from "../assets/coin.png";
import sandbox from "../assets/doodlePreview.png";
import Emotion from "../assets/ee.jpg";
import ElloLibrary from "../assets/ellolibrary.png";
import firefly from "../assets/firefly.png";
import flashlight from "../assets/flashlight-draw.png";
import startupweek from "../assets/flyer.PNG";
import LedgerPad from "../assets/ledgerpad.png";
import Synth from "../assets/synth.jpg";
import temples from "../assets/temples.png";
import themid from "../assets/themid.png";
import Xfolio from "../assets/xfolio.jpg";
import NYU from "./NYU";

const Projects = () => {
  <Routes>
    <Route path="/NYU" element={<NYU />} />
  </Routes>;
  return (
    <div name="projects" className="w-full bg-[#0a192f] text-gray-300 py-4">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Collection of clients & academic work</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${ElloLibrary})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                Ello Library
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ello.com/books"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${duneCloud})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                generative film
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://stanno.us/exploration"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Gallery
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${themid})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                infinitecanvas
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.youtube.com/watch?v=Ec2Onkdgkn8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${startupweek})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                NYU Startup Week
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://nyustartupweek.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${temples})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                NYC synagogue map of the past
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://stanno.us/jewsofnewyork"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo + Writing
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${flashlight})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                Flashlight Drawing Canvas
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://flashdraw.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stanleywalker1/flashlight-drawing-space"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${firefly})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                VR Firefly Sky
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://firefly-vr.netlify.app/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stanleywalker1/fireflies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${sandbox})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                Doodle Sandbox - Multiplayer
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://doodle-sandbox.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stanleywalker1/doodle-sandbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${agar})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                Agar.io Remix
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://agar-io-stanno.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Live Demo
                  </button>
                </a>
                <a
                  href="https://github.com/stanleywalker1/agar.io.stanno"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project tile 1 */}
          <div
            style={{ backgroundImage: `url(${HW1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                NYU - Interactive Computing
              </span>
              <div className="pt-8 text-center">
                <a href="/NYU">
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    NYU
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project tile 2 */}
          <div
            style={{ backgroundImage: `url(${AuxVerse})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                AuxVerse
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://candied-primula-8e4.notion.site/AuxVerse-fb3ae54722494ccb9f5d3c11dbbdddec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project tile 1 */}
          <div
            style={{ backgroundImage: `url(${LedgerPad})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl  font-bold text-white tracking-wider">
                LedgerPad - NYU Innovation Course Product
              </span>
              <div className="pt-8 text-center">
                <a href="https://docs.google.com/presentation/d/138l7QXOH2RAtbRY_cB6eVd0q2ElzDSUg434O8_7VkRo/edit?usp=sharing">
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Pitch Deck
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project tile 2 */}
          <div
            style={{ backgroundImage: `url(${Synth})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Synth#Boi WebGL
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://dissrup.com/drops/synth-boi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-9 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                {/* <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                    </button>
                                </a> */}
              </div>
            </div>
          </div>

          {/* project tile 3 */}
          <div
            style={{ backgroundImage: `url(${Emotion})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                @EmotionEcho
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://twitter.com/EmotionEcho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Twitter
                  </button>
                </a>
                <a
                  href="https://www.notion.so/EmotionEcho-96c81c9bfeea420aaf74bd6570b25ebd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project tile 4 */}
          <div
            style={{ backgroundImage: `url(${Xfolio})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Xfolio
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/exakoss/xfolio-web"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
                <a
                  href="https://candied-primula-8e4.notion.site/Xfolio-508887ad59b544ecb9cce20eff277d02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* project tile 5 */}
          <div
            style={{ backgroundImage: `url(${Robo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Robotario
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://candied-primula-8e4.notion.site/Robotario-edc376c958544f1a864753cbb0a4d9b3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Docs
                  </button>
                </a>
                <a
                  href="https://dl.acm.org/doi/abs/10.1145/3402597.3402598"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Publication
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project tile 6 */}
          <div
            style={{ backgroundImage: `url(${Coin})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Coinbase API
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/stanleywalker1/CoinbaseAPI-Experimental"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project tile 7 */}
          <div
            style={{ backgroundImage: `url(${Green})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Green Design
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://candied-primula-8e4.notion.site/Green-Design-NYU-c0e9b30dbcf5479398e5eaf91a60e9e0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Drawings
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project tile 8 */}
          <div
            style={{ backgroundImage: `url(${Lucid})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effect */}
            <div className="opacity-0 text-center group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Lucid Doodle
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://candied-primula-8e4.notion.site/Lucid-Doodle-57514e11ed67462db321c24ed4827903"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-9 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Docs
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
