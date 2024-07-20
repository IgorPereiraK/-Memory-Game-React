import { useState } from "react";
import GameOver from "./components/GameOver";

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false)

    function restart() {
        setGameOver(true)
    }

    return (
        <div>
           <GameOver show={gameOver} handleRestart={restart}/>
        </div>
    )
}