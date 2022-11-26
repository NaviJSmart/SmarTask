import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./pages/Board";

function App() {
  
  const [selected, setSelected] = useState<{id: string; name:string;} | null>(null);

  return (
    <div className="App">
      <Header />
      <Sidebar
        selected={selected}
        setSelected={setSelected}
      />
      <Board selected={selected} />
    </div>
  );
}

export default App;
