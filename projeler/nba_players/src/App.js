import Cards from "./components/Cards";
import "./App.css";
import {data} from "./helpers/data"

function App() {
  return (
    <div>
      <Cards data={data} />
    </div>
  );
}

export default App;
