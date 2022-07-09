import Sidebar from "./pages/components/Sidebar";
import Home from "./pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex overflow-y-hidden">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
