import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import BoardModal from "./components/Modals/BoardModal";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <BoardModal />
    </div>
  );
}

export default App;
