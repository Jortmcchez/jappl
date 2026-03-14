import GameTile from "./gameTile";

export default function GameBackdrop() {
  const games = [
    { id: 1, title: "Game 1" },
    { id: 2, title: "Game 2" },
    { id: 3, title: "Game 3" },
    { id: 4, title: "Game 4" },
  ];

  const gameEntry = games.map((game) => {
    return <GameTile key={game.id} title={game.title} />;
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[70%] h-[90%] bg-[#fff1bb] rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-8 h-full">
          {gameEntry}
        </div>
      </div>
    </div>
  );
}
