import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <Router>
      {/* <Routes> */}
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
      {/* </Routes> */}
    </Router>
  );
}

export default App;