// Play.tsx
import { useEffect, useContext } from "react";
import CheckWinner from "../utils/checkWinner";
import { useNavigate } from "react-router-dom";
import { PlayContext } from "../context/PlayContext";

export default function Play() {
  const context = useContext(PlayContext);
  const navigate = useNavigate();
  if (!context) {
    throw new Error("PlayContext must be used within a GameProvider");
  }

  const { data, setData } = context;
  const { player, machine } = data;

  const handleChooseElement = (elementChoose: string) => {
    const option = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * option.length);
    const prevData = { ...data };
    if (prevData.player === "rock" && elementChoose === "rock") {
      return alert("you cant choose rock twice in a row");
    } else {
      setData({ player: elementChoose, machine: option[randomIndex] });
      navigate("/game");
      console.log(prevData);
    }
  };

  useEffect(() => {
    CheckWinner(player, machine);
  }, [data]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-4/5 flex justify-around">
        <button
          name="scissors"
          onClick={() => handleChooseElement("scissors")}
          className="text-8xl"
        >
          ✌🏼
        </button>

        <button
          name="paper"
          onClick={() => handleChooseElement("paper")}
          className="text-8xl"
        >
          🖐🏻
        </button>
      </div>
      <div className="mt-20">
        <button
          name="rock"
          onClick={() => handleChooseElement("rock")}
          className="text-8xl"
        >
          ✊🏻
        </button>
      </div>
    </div>
  );
}
