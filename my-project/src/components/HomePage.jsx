import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2 p-2">
        <div className="w-full h-64 flex flex-col justify-center items-center border-2 border-white rounded-lg bg-gray-200 hover:bg-gray-300">
          <img src="../../Images/guess game.png" alt="Example" width="250" />
          <Link to="/guessing-game">
          <p className='font-extrabold	'>Guessing Game⁉️ </p>
            <button className="mt-2 p-2 bg-white text-black rounded hover:bg-orange-400 text-2xl">Play Now!</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full h-64 flex flex-col justify-center items-center border-2 border-white rounded-lg bg-gray-200 hover:bg-gray-300">
          <img src="../../Images/rockpapaer.png" alt="Example" width="250" />
          <Link to="/rock-paper-scissors">
          <p className='font-extrabold	'>Rock Paper Scissors🪨📰✂️ </p>
            <button className="mt-2 p-2 bg-white text-black rounded hover:bg-orange-400 text-2xl">Play Now!</button>
          </Link>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="w-full h-64 flex flex-col justify-center items-center border-2 border-white rounded-lg bg-gray-200 hover:bg-gray-300">
          <img src="../../Images/tiktaktoe.png" alt="Example" width="130" />
          <Link to="/tic-tac-toe">
          <p className='font-extrabold	'>Tik Tac Toe ❌⭕ </p>
            <button className="mt-2 p-2 bg-white text-black rounded hover:bg-orange-400 text-2xl">Play Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
