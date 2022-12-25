import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import BoardModal from "./components/Modals/BoardModal";
import ColumnModal from "./components/Modals/ColumnModal";
import ConfirmModal from "./components/Modals/ConfirmModal";
import TaskModal from "./components/Modals/TaskModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BoardModal />
      <ColumnModal />
      <TaskModal />
      <ConfirmModal />
    </div>
  );
}

export default App;
