import Board from "./components/Board";

const App = () => {
  return (
    <div className="absolute inset-0 overflow-auto p-6 sm:p-8 portrait:flex landscape:lg:flex">
      <div className="flex w-full items-center justify-center">
        <Board />
      </div>
    </div>
  );
};

export default App;
