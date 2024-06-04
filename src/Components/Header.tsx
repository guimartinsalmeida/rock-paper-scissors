import { ScoreContext } from "../context/ScoreContext";
import {useContext} from 'react'
import Modal from "./Modal";

export default function Header() {
  const score_context = useContext(ScoreContext);

  if (!score_context) {
    throw new Error("PlayContext must be used within a GameProvider");
  }

  const {score} = score_context
 

  return (
    <div className="flex w-full justify-around mb-20">

      <div className="flex w-10/12 justify-around border-2 items-center">
      <div>
        <p>Rock</p>
        <p>Paper</p>
        <p>scissors</p>
      </div>

<div>
<Modal/>
</div>
      <div>
        <p>Score: {score}</p>
      </div>
      </div>
    </div>
  );
}
