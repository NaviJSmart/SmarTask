import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import BoardModal from "./components/Modals/BoardModal";
import ColumnModal from "./components/Modals/ColumnModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BoardModal />
      <ColumnModal />
    </div>
  );
}

export default App;
