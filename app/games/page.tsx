import NavBar from "../components/navbar";
import GameBackdrop from "../components/games/gameBackdrop";

export default function Game() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <GameBackdrop />
      </div>
    </>
  );
}
