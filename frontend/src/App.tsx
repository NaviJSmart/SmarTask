import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import BoardModal from "./components/Modals/BoardModal";
import ColumnModal from "./components/Modals/ColumnModal";
import TaskModal from "./components/Modals/TaskModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BoardModal />
      <ColumnModal />
      <TaskModal />

    </div>
  );
}

export default App;
