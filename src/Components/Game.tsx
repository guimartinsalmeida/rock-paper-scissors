// Game.tsx
import { useEffect, useState } from "react";
import { useContext } from "react";
import { PlayContext } from "../context/PlayContext";
import { ScoreContext } from "../context/ScoreContext";
import { Link } from "react-router-dom";

const Game = () => {
  const play_context = useContext(PlayContext);
  const score_context = useContext(ScoreContext);
  const [winner, setWinner] = useState("");

  if (!play_context) {
    throw new Error("PlayContext must be used within a GameProvider");
  }
  if (!score_context) {
    throw new Error("score_context must be used within a GameProvider");
  }

  function chooseIcon(option: string) {
    const iconOptions: Record<string, string> = {
      rock: "👊🏻",
      paper: "🖐🏻",
      scissors: "✌🏼",
    };

    return iconOptions[option];
  }

  function determineWinner(player: string, machine: string) {
    if (player === machine) return "Draw";
    const winsPossibility: Record<string, string> = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };
    return winsPossibility[player] === machine ? "Player 1" : "Player 2";
  }

  const getClassForWinner = (winner: string, player: string) => {
    if (winner === "Draw") return "bg-yellow-400";
    return winner === player ? "bg-green-600" : "bg-red-700";
  };

  const { data } = play_context;
  const { setScore } = score_context;

  useEffect(() => {
    const winnerFunction = determineWinner(data.player, data.machine);
    setWinner(winnerFunction);
    if (winner === "Player 1") {
      setScore((prev) => {
        return prev + 1;
      });
    }
  }, [data.machine, data.player, winner]);

  return (
    <div className="h-72">
      <div className="flex w-full justify-evenly ">
        <div className="flex flex-col justify-center items-center">
          <p>Player 1</p>
          <span
            className={`text-8xl rounded-full w-28 h-28 flex items-center justify-center ${getClassForWinner(
              winner,
              "Player 1"
            )}`}
          >
            {chooseIcon(data.player)}
          </span>
          <p>{data.player}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          {winner === "Draw" ? (
            <span className="border-double border-4 border-yellow-400">
              Draw
            </span>
          ) : (
            <span className="border-double border-8 border-green-600 w-40 text-center font-bold text-green-600">
              {winner} Wins
            </span>
          )}

          <Link to={"/"}>
            <button className="w-40 h-10 bg-cyan-600 text-white rounded-lg mt-4 text-center">
              Play Again
            </button>
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p>Machine</p>
          <span
            className={`text-8xl rounded-full w-28 h-28 flex items-center justify-center ${getClassForWinner(
              winner,
              "Player 2"
            )}`}
          >
            {" "}
            {chooseIcon(data.machine)}
          </span>
          <p>{data.machine}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
