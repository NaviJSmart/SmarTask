import {useState} from "react";
import Dashboard from "../../pages/Dashboard";
import Sidebar from "../Sidebar";
import './Main.scss'
const Main = () => {
    const [selected, setSelected] = useState<{id: string; name:string;} | null>(null);
  return (
    <div className="Main">
      <Sidebar selected={selected} setSelected={setSelected} />
      <Dashboard selected={selected} />
    </div>
  );
};

export default Main;
