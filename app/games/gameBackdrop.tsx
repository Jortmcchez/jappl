import GameTile from "./gameTile";

export default function GameBackdrop() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[70%] h-[90%] bg-[#fff1bb] rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
          <GameTile title="Game 1" />
          <GameTile title="Game 2" />
          <GameTile title="Game 3" />
          <GameTile title="Game 4" />
        </div>
      </div>
    </div>
  );
}
