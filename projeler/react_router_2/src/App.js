import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Path from "./pages/Path";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import "./App.css";
import PersonDetail from "./pages/PersonDetail";
import PrivateRouter from "./pages/PrivateRouter";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PrivateRouter />}>
          <Route index path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>

        <Route path="/paths" element={<Path />}>
          <Route index path="" element={<FullStack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
