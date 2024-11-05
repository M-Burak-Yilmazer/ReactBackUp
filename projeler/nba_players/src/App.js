import Cards from "./components/Cards";
import "./App.css";
import {data} from "./helpers/data"
import Container from "react-bootstrap/esm/Container";

function App() {
  return (
    <Container className="text-center my-4 p-2">
      <Cards data={data} />
    </Container>
  );
}

export default App;
