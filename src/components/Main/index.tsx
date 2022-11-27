import {useState} from "react";
import Board from "../../pages/Board";
import Sidebar from "../Sidebar";
import './Main.scss'
const Main = () => {
    const [selected, setSelected] = useState<{id: string; name:string;} | null>(null);
  return (
    <div className="Main">
      <Sidebar selected={selected} setSelected={setSelected} />
      <Board selected={selected} />
    </div>
  );
};

export default Main;
