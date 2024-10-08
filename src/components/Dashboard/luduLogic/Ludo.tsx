import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const Ludo = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [gameId, setGameId] = useState<string>("");
  const [playerJoined, setPlayerJoined] = useState<number>(0);
  const [diceValues, setDiceValues] = useState<{ [key: string]: number }>({});
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  useEffect(() => {
    // Connect to the Socket.IO server when the component mounts
    const newSocket = io("http://localhost:4000"); // Replace with your server's URL
    setSocket(newSocket);

    // Clean up on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Event handlers for Socket.IO
  useEffect(() => {
    if (socket) {
      socket.on("playerJoined", (numPlayers: number) => {
        setPlayerJoined(numPlayers);
      });

      socket.on("startGame", ({ players }) => {
        setIsGameStarted(true);
        console.log("Game started with players:", players);
      });

      socket.on("updateDiceState", ({ player, value }) => {
        setDiceValues((prevDiceValues) => ({
          ...prevDiceValues,
          [player]: value,
        }));
      });

      socket.on("roomFull", (message: string) => {
        alert(message);
      });
    }
  }, [socket]);

  const handleJoinGame = () => {
    if (socket && gameId) {
      socket.emit("joinGame", gameId);
    } else {
      alert("Please enter a game ID");
    }
  };

  const handleRollDice = () => {
    if (socket && isGameStarted) {
      const value = Math.floor(Math.random() * 6) + 1; // Roll a random dice (1-6)
      socket.emit("diceRolled", { gameId, player: socket.id, value });
    }
  };

  return (
    <div className="text-center py-5">
      <h3 className="text-3xl mb-5">Ludo Game Demo</h3>

      <div className="mb-4">
        <input
          type="text"
          value={gameId}
          onChange={(e) => setGameId(e.target.value)}
          placeholder="Enter Game ID"
          className="p-2 border rounded"
        />
        <button
          onClick={handleJoinGame}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Join Game
        </button>
      </div>

      {playerJoined > 0 && <p>Players in room: {playerJoined}</p>}

      {isGameStarted && (
        <div className="mt-4">
          <p>Game Started! Roll the dice:</p>
          <button
            onClick={handleRollDice}
            className="p-2 bg-green-500 text-white rounded"
          >
            Roll Dice
          </button>
        </div>
      )}

      {Object.keys(diceValues).length > 0 && (
        <div className="mt-3">
          <h4>Dice Results:</h4>
          {Object.entries(diceValues).map(([playerId, value]) => (
            <p key={playerId}>
              {playerId === socket?.id ? "You" : "Opponent"} rolled a {value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ludo;
